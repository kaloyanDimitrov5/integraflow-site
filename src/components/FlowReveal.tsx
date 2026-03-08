'use client';

import {motion} from 'framer-motion';

export default function FlowReveal({text = 'Flow'}: {text?: string}) {
  return (
    <span className="relative inline-block">
      {/* Text */}
      <span className="relative z-10 text-white">{text}</span>

      {/* scanning line that "builds" the text */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 [mask-image:linear-gradient(to_right,transparent,black,transparent)]"
        initial={{x: '-140%'}}
        animate={{x: '140%'}}
        transition={{duration: 1.6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6}}
      >
        <span className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent blur-[2px]" />
        <span className="absolute inset-y-0 left-8 w-10 bg-gradient-to-r from-transparent via-indigo-400/45 to-transparent blur-[1px]" />
      </motion.span>

      {/* tiny particles sparkle */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        initial={{opacity: 0.2}}
        animate={{opacity: 0.65}}
        transition={{duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror'}}
      >
        <span className="absolute left-[10%] top-[20%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,.25)]" />
        <span className="absolute left-[55%] top-[10%] h-1 w-1 rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(34,211,238,.25)]" />
        <span className="absolute left-[85%] top-[55%] h-1 w-1 rounded-full bg-indigo-200/70 shadow-[0_0_18px_rgba(99,102,241,.25)]" />
      </motion.span>
    </span>
  );
}
