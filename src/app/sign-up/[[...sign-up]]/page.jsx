import { SignUp } from "@clerk/nextjs";
import { motion } from "motion/react";

export default function SignUpPage() {
  // Check if Clerk keys are valid
  const hasValidClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') && 
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder');

  if (!hasValidClerkKey) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
        <div className="text-center p-8">
          <h1 className="text-2xl font-black mb-4">Authentication Not Configured</h1>
          <p className="text-gray-500">Please configure Clerk authentication keys in your environment variables.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-black overflow-hidden font-geist">
      {/* Left Column: Cinematic Typography */}
      <div className="lg:w-1/2 relative flex flex-col justify-center p-12 lg:p-24 bg-[#fafafa] dark:bg-neutral-900/30 overflow-hidden border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10"
        >
          <div className="inline-block px-4 py-2 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-12">
            New Horizon
          </div>
          
          <h1 className="text-[12vw] lg:text-[8vw] font-black leading-[0.75] tracking-tighter mb-12 uppercase">
            JOIN THE<br/>
            <span className="text-gray-300 dark:text-neutral-800">MISSION.</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-500 font-medium max-w-md leading-snug">
            Create your account to unlock full access to the intelligence system and start building your future.
          </p>
        </motion.div>

        {/* Brand Decoration */}
        <div className="absolute bottom-12 left-12 font-black text-[10px] uppercase tracking-[0.5em] opacity-20 hidden lg:block">
          Portfolio // Intelligence // System
        </div>
      </div>

      {/* Right Column: Polished Auth Form */}
      <div className="lg:w-1/2 relative flex items-center justify-center p-8 lg:p-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <SignUp appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900 rounded-[2.5rem] p-4 lg:p-8",
              headerTitle: "text-2xl font-black tracking-tight uppercase",
              headerSubtitle: "text-gray-500 dark:text-neutral-500 font-medium",
              formButtonPrimary: "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all",
              formFieldInput: "bg-gray-50 dark:bg-black border border-black/5 dark:border-white/10 px-6 py-4 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white transition-all",
              footerActionLink: "text-black dark:text-white font-bold hover:opacity-70 transition-opacity",
              socialButtonsBlockButton: "border border-black/5 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all py-3",
              dividerLine: "bg-black/5 dark:bg-white/5",
              dividerText: "text-[10px] font-black uppercase tracking-widest opacity-30"
            }
          }} />
        </motion.div>
      </div>
    </div>
  );
}
