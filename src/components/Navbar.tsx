import { motion } from 'motion/react';
import { Terminal, Gamepad2, Shield, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
          <Terminal size={24} className="text-cyan-400 group-hover:scale-110 transition-transform" />
        </div>
        <span className="font-mono text-xl font-bold tracking-tighter text-white uppercase italic">
          NEON<span className="text-cyan-400">OVERDRIVE</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-white/60">
        <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">//</span> ARCHIVE
        </a>
        <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">//</span> DATABASE
        </a>
        <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">//</span> NETWORK
        </a>
        <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 group">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">//</span> SYSTEMS
        </a>
      </div>

      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-cyan-500/50 rounded-xs font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-400 hover:bg-cyan-400/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <Shield size={14} /> INITIALIZE_LINK
        </motion.button>
        <button className="md:hidden p-2 text-white/70">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
