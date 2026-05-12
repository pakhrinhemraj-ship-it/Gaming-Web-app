import { motion, useScroll, useSpring } from 'motion/react';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import { ChevronDown, Github, Twitter, Disc as Discord, Shield, Zap, Target } from 'lucide-react';

const GAMES = [
  {
    title: "NEURAL_VOID",
    category: "TACTICAL_ASSAULT",
    image: "https://picsum.photos/seed/cyberpunk1/800/1000",
    delay: 0.2
  },
  {
    title: "SYNDICATE_X",
    category: "GLOBAL_DOMINATION",
    image: "https://picsum.photos/seed/cyberpunk2/800/1000",
    delay: 0.4
  },
  {
    title: "STATIC_SHOCK",
    category: "STEALTH_INFILTRATION",
    image: "https://picsum.photos/seed/cyberpunk3/800/1000",
    delay: 0.6
  },
  {
    title: "CORE_FAILURE",
    category: "SURVIVAL_HORROR",
    image: "https://picsum.photos/seed/cyberpunk4/800/1000",
    delay: 0.8
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      {/* 3D Background */}
      <ThreeCanvas />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 z-[100] origin-left shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
        style={{ scaleX }} 
      />

      <Navbar />

      <Hero />

      {/* Stats Section / Feature Transition */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02] backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <FeatureItem 
            icon={<Shield className="text-cyan-400" size={32} />}
            title="NEURAL_SHIELD"
            desc="Military-grade encryption for your digital consciousness."
          />
          <FeatureItem 
            icon={<Zap className="text-magenta-400" size={32} />}
            title="KINETIC_SYNC"
            desc="Near-zero latency neural feedback loops."
          />
          <FeatureItem 
            icon={<Target className="text-yellow-400" size={32} />}
            title="VOID_TRACKING"
            desc="Predictive combat analytics powered by quantum AI."
          />
        </div>
      </section>

      {/* Games Grid */}
      <section id="games" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto focus-within:ring-2 focus-within:ring-cyan-500">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.3em] mb-4">// CURRENT_OPERATIONS</h2>
              <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">SELECT_YOUR<br />MISSION</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-white/40 border-l border-white/10 pl-6 h-fit">
              <span>ACTIVE_REPORTS: 2,842</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>STABLE_NODES: ONLINE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GAMES.map((game, idx) => (
              <GameCard key={idx} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full -z-10"
          />
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-tight">
            NO MORE REASONS<br />TO WAIT. <span className="text-cyan-400">CONNECT.</span>
          </h2>
          <p className="text-white/60 font-mono mb-12 max-w-xl mx-auto">
            The grid is waiting for its next architect. Join the collective and redefine what's possible in the digital realm.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-lg skew-x-[-15deg] hover:bg-cyan-400 transition-colors"
          >
            <div className="skew-x-[15deg]">INITIALIZE_SEQUENCE</div>
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-2xl font-bold tracking-tighter text-white uppercase italic">
              NEON<span className="text-cyan-400">OVERDRIVE</span>
            </span>
            <p className="text-white/30 text-xs font-mono uppercase tracking-[0.2em]">© 2026 NEURAL_CORE_EST. ALL_RIGHTS_RESERVED</p>
          </div>

          <div className="flex gap-8">
            <FooterIcon icon={<Twitter size={20} />} href="#" />
            <FooterIcon icon={<Discord size={20} />} href="#" />
            <FooterIcon icon={<Github size={20} />} href="#" />
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Server Status</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-white uppercase tracking-widest">Global_Grid_Stable</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/20 uppercase font-mono text-[10px] tracking-[0.3em]"
      >
        <span>SCROLL_TO_DESCEND</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </main>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group">
      <div className="mb-6 flex justify-center md:justify-start group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 translate-x-[-5px] transition-transform group-hover:translate-x-0">{title}</h4>
      <p className="text-sm font-mono text-white/40">{desc}</p>
    </div>
  );
}

function FooterIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      className="p-3 border border-white/5 bg-white/5 rounded-xs text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all"
    >
      {icon}
    </a>
  );
}

