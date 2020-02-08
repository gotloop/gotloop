export interface BoxState {
  x: number;
  y: number;
  w: number;
  h: number;
  in?: [];
  out?: [];
  audioNode?: AudioNode;
}
export interface CableState {
  from: string;
  to: string;
  length?: number;
}

export interface NoizerState {
  currentState: 'loading' | 'dragging' | 'playing' | 'idle';
  cables?: {[id: string]: CableState};
  boxes?: {[id: string]: BoxState};
  presets?: {};
}
