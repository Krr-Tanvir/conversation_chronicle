
import React from 'react';
import { Turn } from '../types';
import { ShieldCheck, Cpu, Terminal, Clock, AlertTriangle } from 'lucide-react';

interface TurnItemProps {
  turn: Turn;
  index: number;
}

const TurnItem: React.FC<TurnItemProps> = ({ turn, index }) => {
  const getComplianceColor = (status: string) => {
    switch (status) {
      case 'COMPLIANT': return 'text-emerald-400 border-emerald-500/30';
      case 'WARNING': return 'text-amber-400 border-amber-500/30';
      case 'VIOLATION': return 'text-rose-400 border-rose-500/30';
      default: return 'text-slate-400 border-slate-700';
    }
  };

  return (
    <div className="relative pl-12 pb-16 last:pb-0 animate-in fade-in slide-in-from-left-4 duration-500">
      {/* Timeline Marker */}
      <div className="absolute left-[-12px] top-2 z-10">
        <div className={`w-6 h-6 rounded-full bg-slate-950 border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]`} />
      </div>

      <div className="space-y-4">
        {/* Timestamp */}
        <div className="flex items-center gap-2 text-slate-500 mono text-xs uppercase tracking-widest">
          <Clock size={14} />
          {turn.ts}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Side */}
          <div className="relative p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20 backdrop-blur-md group hover:bg-blue-500/10 transition-all duration-300">
            <span className="absolute -top-3 left-6 bg-slate-950 px-3 py-1 text-[10px] font-bold text-blue-400 border border-blue-500/40 rounded-full tracking-tighter uppercase">
              User Literal Command
            </span>
            <p className="text-lg font-medium leading-relaxed text-slate-100 whitespace-pre-wrap">
              {turn.prompt}
            </p>
          </div>

          {/* AI Side */}
          <div className="relative p-6 rounded-3xl bg-purple-500/5 border border-purple-500/20 backdrop-blur-md group hover:bg-purple-500/10 transition-all duration-300">
            <span className="absolute -top-3 left-6 bg-slate-950 px-3 py-1 text-[10px] font-bold text-purple-400 border border-purple-500/40 rounded-full tracking-tighter uppercase">
              Kona's Tactical Logic
            </span>
            <p className="text-slate-300 italic leading-relaxed">
              &ldquo;{turn.thought}&rdquo;
            </p>
          </div>
        </div>

        {/* Execution Box */}
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
              <Cpu size={14} />
              Granular Technical Actions
            </div>
            <div className="flex-grow h-[1px] bg-emerald-500/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {turn.exec.map((step, sIdx) => (
              <div key={sIdx} className="p-4 bg-black/40 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-emerald-400/80">
                  <Terminal size={12} />
                  <span className="mono text-[10px] font-bold">{step.n}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
              <ShieldCheck size={16} />
              {turn.action}
            </div>
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-black tracking-widest ${getComplianceColor(turn.compliance)}`}>
              {turn.compliance === 'VIOLATION' ? <AlertTriangle size={12} /> : null}
              {turn.compliance}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnItem;
