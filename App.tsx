
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Info, Shield, RefreshCcw, LayoutDashboard, BrainCircuit, TrendingUp, ChevronRight } from 'lucide-react';
import { Turn } from './types';
import TurnItem from './components/TurnItem';
import { getSessionInsight } from './services/geminiService';

const INITIAL_TURNS: Turn[] = [
  {
    id: '1',
    ts: "Feb 11, 2026 - 02:56 AM",
    prompt: "follow global rule\nalways update conversation chronicle file with my every command#\n\nrestore kora lagbe na, oita tumi paba na, differernt conversation ee chilo",
    thought: "Dost asholei gussai gese! Sumary cholbe na. I have to recover every turn from the context and show the literal prompts and technical tool call names. Global Rule follow kora boro dorkar ekhon.",
    exec: [
      { n: "Instance Check", d: "Closing any background Python processes." },
      { n: "Cloning v3.3.3", d: "Creating a full safety snapshot of the codebase." },
      { n: "Logging", d: "Syncing activity_log.json with literalTurn history." },
      { n: "Dashboard Fix", d: "Refreshing audit trails for transparency." }
    ],
    action: "Applied Phase Rectification Protocol (Compliance: v3.3.3)",
    compliance: 'COMPLIANT'
  },
  {
    id: '2',
    ts: "Feb 11, 2026 - 02:53 AM",
    prompt: "did u follow global rule?",
    thought: "Boro ekta bul kore felsilam. Clone na korei v3.3.2 hotfix apply koresilam. Rule violation check in progress.",
    exec: [
      { n: "Text Response", d: "Acknowledged rule violation for missing pre-edit clone." },
      { n: "Rectification Plan", d: "Initiated recovery of sequence order." }
    ],
    action: "Self-Audit: Multi-Step Rule Violation acknowledged.",
    compliance: 'VIOLATION'
  },
  {
    id: '3',
    ts: "Feb 11, 2026 - 02:49 AM",
    prompt: "shundor, but ami exactly ki ki bolechi, sheita lagbe, jobabe tomar newa steps, ki ki orecho sei sob lagbe",
    thought: "User literal granularity chachho. Point-by-point prompts r Kona's internal engineering steps lagbe ekhon.",
    exec: [
      { n: "Chronicle v2.0", d: "Rebuilt chronicle with prompts, brain logic, and technical steps." },
      { n: "Activity Enrichment", d: "Added 'tools' and 'steps' metadata to activity_log.json." }
    ],
    action: "Generated Chronicle v2.0 with Literal-First architecture.",
    compliance: 'COMPLIANT'
  },
  {
    id: '4',
    ts: "Feb 11, 2026 - 02:27 AM",
    prompt: "follow global rule\nbaba re, ami version folder create korar uddessho ki?\nlatest za niye kaj korchi oita copy paste korte?\nna to\nold folder e gele old conversastion onujhayi ja thakar kotha chilo, just tototuku thakbe\n\nhistory check kore version wise folder er vetoer gulo change koro ager obosthay niye zao...",
    thought: "Global Rule-er ashol mane bujha gelo. Versions ashole 'Past Self' snapshot hote hobe, temporary copy na.",
    exec: [
      { n: "Legacy Research", "d": "Searching C:\\Users\\krrta\\.gemini\\antigravity\\brain for past tool calls." },
      { n: "ls & grep", "d": "Investigating conversation .pb and log metadata." }
    ],
    action: "Initiated Legacy Source Code Recovery Research.",
    compliance: 'COMPLIANT'
  },
  {
    id: '5',
    ts: "Feb 11, 2026 - 02:21 AM",
    prompt: "1.0 kivabe run korbo?",
    thought: "User legacy experience test korte chay. Core restoration logic provide kora dorkar.",
    exec: [
      { n: "Restoration", "d": "Writing v1.0 version of converter_core.py and audio_to_video_converter.py." }
    ],
    action: "Provided Legacy Run Instructions for v1.0.0 Snapshot.",
    compliance: 'COMPLIANT'
  },
  {
    id: '6',
    ts: "Feb 11, 2026 - 02:10 AM",
    prompt: "Error jomijoma.mp3: name 'completed_dir' is not defined",
    thought: "Arre! Scoping error. `completed_dir` function er baire define hoye gesilo loop cholar somoy.",
    exec: [
      { n: "Fix", "d": "Defined completed_dir early in run_conversion block." },
      { n: "Verify", "d": "Successful conversion of jomijoma.mp3 and movement to Completed folder." }
    ],
    action: "Hotfixed v3.3.2 Archival Movement Crash.",
    compliance: 'WARNING'
  }
];

const App: React.FC = () => {
  const [turns, setTurns] = useState<Turn[]>(INITIAL_TURNS);
  const [searchQuery, setSearchQuery] = useState('');
  const [insight, setInsight] = useState<{ summary: string; keyInsights: string[]; efficiencyScore: number } | null>(null);
  const [isInsightLoading, setIsInsightLoading] = useState(false);

  const filteredTurns = useMemo(() => {
    return turns.filter(t => 
      t.prompt.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.action.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [turns, searchQuery]);

  const stats = useMemo(() => {
    const compliantCount = turns.filter(t => t.compliance === 'COMPLIANT').length;
    return {
      totalTurns: turns.length,
      complianceRate: Math.round((compliantCount / turns.length) * 100),
      lastActive: turns[0]?.ts.split(' - ')[0] || 'N/A'
    };
  }, [turns]);

  const fetchInsights = async () => {
    setIsInsightLoading(true);
    const data = await getSessionInsight(turns);
    if (data) setInsight(data);
    setIsInsightLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg shadow-purple-500/20">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                CHRONICLE v2.1
              </h1>
              <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">Session Audit Transparency</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-purple-400 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search audit logs..." 
                className="bg-slate-900 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50 transition-all w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={fetchInsights}
              disabled={isInsightLoading}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-bold hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              {isInsightLoading ? <RefreshCcw className="animate-spin" size={16} /> : <BrainCircuit size={16} />}
              AI Insight
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full p-4 md:p-8 space-y-12">
        {/* Intro Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-purple-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <LayoutDashboard className="text-purple-400" size={20} />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Sequence</span>
            </div>
            <div className="text-4xl font-black tracking-tighter text-white">{stats.totalTurns}</div>
            <div className="text-xs text-slate-500 mt-2 font-medium">Logged interactions this session</div>
          </div>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-emerald-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <Shield className="text-emerald-400" size={20} />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Compliance Integrity</span>
            </div>
            <div className="text-4xl font-black tracking-tighter text-white">{stats.complianceRate}%</div>
            <div className="text-xs text-slate-500 mt-2 font-medium">Rule adherence scoring</div>
          </div>
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl group hover:border-blue-500/30 transition-all">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="text-blue-400" size={20} />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active Status</span>
            </div>
            <div className="text-4xl font-black tracking-tighter text-white">UPTIME</div>
            <div className="text-xs text-slate-500 mt-2 font-medium">Last synced: {stats.lastActive}</div>
          </div>
        </section>

        {/* AI Insight Panel */}
        {insight && (
          <section className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl p-8 animate-in zoom-in-95 duration-500">
            <div className="flex items-center gap-2 mb-6 text-purple-400 font-black tracking-widest uppercase text-xs">
              <BrainCircuit size={18} />
              Session Intelligence Analysis
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-xl text-slate-200 leading-relaxed font-light">
                  {insight.summary}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {insight.keyInsights.map((ki, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 bg-white/5 rounded-xl border border-white/5">
                      <ChevronRight className="text-purple-400 shrink-0" size={16} />
                      <span className="text-sm text-slate-300 font-medium">{ki}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-black/40 rounded-2xl border border-white/5">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="58" fill="transparent" stroke="#1e293b" strokeWidth="8" />
                    <circle cx="64" cy="64" r="58" fill="transparent" stroke="url(#gradient)" strokeWidth="8" strokeDasharray={364} strokeDashoffset={364 - (364 * insight.efficiencyScore / 100)} strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-3xl font-black">{insight.efficiencyScore}%</span>
                </div>
                <div className="mt-4 text-[10px] font-black tracking-widest text-slate-500 uppercase">Efficiency Delta</div>
              </div>
            </div>
          </section>
        )}

        {/* Main Feed Container */}
        <section className="relative">
          <div className="absolute left-[3px] top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full opacity-30" />
          <div className="space-y-4">
            {filteredTurns.map((turn, index) => (
              <TurnItem key={turn.id} turn={turn} index={index} />
            ))}
            {filteredTurns.length === 0 && (
              <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800">
                <Info className="mx-auto text-slate-700 mb-4" size={48} />
                <p className="text-slate-500 font-medium">No audit entries found matching your query.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-xs font-bold tracking-widest uppercase mb-2">
          Absolute Record Document • MediaFlow Enhancements
        </p>
        <p className="text-slate-700 text-[10px] max-w-xl mx-auto leading-relaxed">
          This Chronicle serves as an immutable log of all literal commands and tactical responses during current development phase. Unauthorized deletion or tampering is strictly monitored by compliance protocols.
        </p>
      </footer>
    </div>
  );
};

export default App;
