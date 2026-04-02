import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 w-full pt-12 pb-12">
      <SignIn path="/sign-in" fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
