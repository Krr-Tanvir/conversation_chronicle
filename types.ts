
export interface ExecutionStep {
  n: string; // Name
  d: string; // Description
}

export interface Turn {
  id: string;
  ts: string;
  prompt: string;
  thought: string;
  exec: ExecutionStep[];
  action: string;
  compliance: 'COMPLIANT' | 'WARNING' | 'VIOLATION';
}

export interface ChronicleStats {
  totalTurns: number;
  complianceRate: number;
  lastActive: string;
}
