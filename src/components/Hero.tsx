import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">System: Operational // v.4.0.2</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-8 text-white uppercase overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              BREACH THE
            </motion.span>
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              FRONTIER
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-white/60 font-mono mb-10 max-w-lg leading-relaxed border-l-2 border-cyan-500/30 pl-6"
          >
            Welcome to the neural-linked future. Experience next-generation combat dynamics 
            in a world where data is currency and speed is survival.
          </motion.p>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-widest overflow-hidden skew-x-[-15deg]"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <div className="flex items-center gap-2 skew-x-[15deg]">
                ENTER_VOID <ArrowRight size={20} />
              </div>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-400 transition-all skew-x-[-15deg]"
            >
              <div className="skew-x-[15deg]">LEARN_MORE</div>
            </motion.button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-10 bg-cyan-500/10 blur-[100px] rounded-full" />
          <div className="grid grid-cols-2 gap-4 relative">
            <StatBox icon={<Cpu className="text-cyan-400" />} label="CPU_LOAD" value="42%" delay={1.2} />
            <StatBox icon={<Zap className="text-magenta-400" />} label="VOLTAGE" value="1.2MV" delay={1.4} />
            <StatBox icon={<Activity className="text-yellow-400" />} label="NEURAL" value="SYNCED" delay={1.6} />
            <div className="p-6 border border-white/10 backdrop-blur-xl bg-white/5 rounded-xs flex flex-col justify-end">
              <span className="text-[10px] font-mono text-white/40 uppercase mb-2">Location</span>
              <span className="text-xs font-mono text-white tracking-[0.1em]">SECTOR_07_B</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative scanner line */}
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none z-10"
      />
    </section>
  );
}

function StatBox({ icon, label, value, delay }: { icon: React.ReactNode, label: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 border border-white/10 backdrop-blur-xl bg-white/5 rounded-xs group hover:border-cyan-500/50 transition-colors"
    >
      <div className="mb-4">{icon}</div>
      <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{label}</div>
      <div className="text-2xl font-black text-white italic">{value}</div>
    </motion.div>
  );
}
