"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Cpu, Zap, Save, CheckCircle2 } from "lucide-react";

export default function ModelsPage() {
    const [modelType, setModelType] = useState("gaussian");
    const [epochs, setEpochs] = useState(10);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const config = localStorage.getItem("adsynth_modelConfig");
        if (config) {
            const parsed = JSON.parse(config);
            setModelType(parsed.modelType || "gaussian");
            setEpochs(parsed.epochs || 10);
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem("adsynth_modelConfig", JSON.stringify({ modelType, epochs }));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <>
            <Header title="Models Configuration" breadcrumbs={[]} />
            <div className="p-8 max-w-4xl mx-auto w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">AI Synthesizer Selection</h1>
                <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    Choose the underlying machine learning architecture used to generate your synthetic data.
                </p>

                <div className="space-y-6">
                    {/* Model Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div 
                            onClick={() => setModelType("gaussian")}
                            className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${modelType === 'gaussian' ? 'border-primary-500 bg-primary-50/20' : 'border-slate-200 hover:border-slate-300'}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${modelType === 'gaussian' ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-500'}`}>
                                    <Zap size={24} />
                                </div>
                                {modelType === 'gaussian' && <CheckCircle2 className="text-primary-500" />}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Gaussian Copula</h3>
                            <p className="text-sm text-slate-500">Fast, statistical mathematical model. Best for standard numerical and categorical distributions. Minimal compute required.</p>
                        </div>

                        <div 
                            onClick={() => setModelType("ctgan")}
                            className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${modelType === 'ctgan' ? 'border-primary-500 bg-primary-50/20' : 'border-slate-200 hover:border-slate-300'}`}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${modelType === 'ctgan' ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-500'}`}>
                                    <Cpu size={24} />
                                </div>
                                {modelType === 'ctgan' && <CheckCircle2 className="text-primary-500" />}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">CTGAN (Deep Learning)</h3>
                            <p className="text-sm text-slate-500">Advanced Generative Adversarial Network. Best for complex, highly-correlated multi-table datasets. High compute required.</p>
                        </div>
                    </div>

                    {/* Hyperparameters */}
                    {modelType === "ctgan" && (
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h3 className="text-md font-bold text-slate-900 mb-4">Hyperparameters (CTGAN)</h3>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Training Epochs: {epochs}</label>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="50" 
                                    value={epochs} 
                                    onChange={(e) => setEpochs(parseInt(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                                />
                                <p className="text-xs text-slate-500 mt-2">More epochs increase data quality but take longer to train. The UI streaming progress will reflect this deep learning tuning.</p>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-end pt-8">
                        <button 
                            onClick={handleSave}
                            className={`flex items-center px-6 py-3 rounded-lg text-sm font-bold text-white transition-all shadow-md ${saved ? 'bg-green-500 hover:bg-green-600' : 'bg-slate-900 hover:bg-slate-800'}`}
                        >
                            {saved ? <><CheckCircle2 size={18} className="mr-2" /> Saved</> : <><Save size={18} className="mr-2" /> Save Configuration</>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
