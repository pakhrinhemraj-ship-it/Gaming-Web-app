import { motion } from 'motion/react';
import { ExternalLink, Info } from 'lucide-react';

interface GameCardProps {
  title: string;
  category: string;
  image: string;
  delay: number;
}

export default function GameCard({ title, category, image, delay }: GameCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="group relative h-[450px] overflow-hidden rounded-xs border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl transition-all hover:border-cyan-500/50"
    >
      {/* Image Container with Hover Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-sm uppercase tracking-widest">
            {category}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">v.1.04</span>
        </div>
        
        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4 translate-x-[-10px] group-hover:translate-x-0 transition-transform font-mono">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-cyan-400 transition-colors">
            <ExternalLink size={14} /> LAUNCH
          </button>
          <button className="p-2 border border-white/20 text-white/60 hover:text-white hover:border-white transition-colors">
            <Info size={16} />
          </button>
        </div>
      </div>

      {/* Decorative Glitch Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity">
        <div className="absolute inset-0 bg-cyan-500/30 animate-pulse" />
      </div>
    </motion.div>
  );
}
