"use server";

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";

export async function recordSynthesisRun(fileName: string, rows: number, qualityScore: number, privacyScore: number) {
    try {
        await prisma.synthesisRun.create({
            data: {
                fileName,
                rows,
                qualityScore,
                privacyScore,
            },
        });
        revalidatePath('/dashboard');
        revalidatePath('/audit-logs');
    } catch (e) {
        console.error("Failed to record synthesis run:", e);
    }
}

export async function recordActivation(audienceName: string, destination: string, size: number, status: string, roi: number) {
    try {
        await prisma.activation.create({
            data: {
                audienceName,
                destination,
                size,
                status,
                roi,
            },
        });
        revalidatePath('/dashboard');
        revalidatePath('/activations');
        revalidatePath('/audit-logs');
    } catch (e) {
        console.error("Failed to record activation:", e);
    }
}

export async function getDashboardStats() {
    const runs = await prisma.synthesisRun.findMany({ orderBy: { createdAt: 'desc' } });
    const activations = await prisma.activation.findMany({ orderBy: { createdAt: 'desc' } });
    
    const totalProfiles = runs.reduce((acc: number, curr: any) => acc + curr.rows, 0) || 0;
    
    // Calculate unique active destinations
    const activeDestinations = new Set(activations.filter((a: any) => a.status === 'Active').map((a: any) => a.destination)).size;
    
    const activeActivationsCount = activations.filter((a: any) => a.status === 'Active').length;
    const avgRoi = activeActivationsCount > 0 
                     ? activations.filter((a: any) => a.status === 'Active').reduce((acc: number, curr: any) => acc + curr.roi, 0) / activeActivationsCount 
                     : 0;

    return {
        totalProfiles,
        activeDestinations,
        avgRoi: Number(avgRoi.toFixed(1)),
        runs,
        activations
    };
}

export async function getAuditLogs() {
    const runs = await prisma.synthesisRun.findMany({ orderBy: { createdAt: 'desc' } });
    const activations = await prisma.activation.findMany({ orderBy: { createdAt: 'desc' } });
    
    // Combine and format logs into a unified timeline
    const allLogs = [
        ...runs.map((r: any) => ({
            id: r.id,
            action: 'SYNTHESIS_RUN',
            details: `Generated ${r.rows.toLocaleString()} profiles from ${r.fileName}`,
            user: 'System Admin',
            status: 'Success',
            metrics: `Quality: ${r.qualityScore}%, Privacy: ${r.privacyScore}%`,
            createdAt: r.createdAt
        })),
        ...activations.map((a: any) => ({
            id: a.id,
            action: 'AUDIENCE_SYNC',
            details: `Synced ${a.audienceName} to ${a.destination}`,
            user: 'System Admin',
            status: a.status,
            metrics: `Size: ${a.size.toLocaleString()}, Expected ROI: +${a.roi}%`,
            createdAt: a.createdAt
        }))
    ];

    // Sort by newest first
    return allLogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}
