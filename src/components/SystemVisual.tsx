import { useState } from 'react';

const modes = [
  { id: 'flow', label: 'Flow', detail: 'Connected services. Consistent data.', caption: 'Data moves. Systems stay connected.' },
  { id: 'scale', label: 'Scale', detail: 'Work distributed across parallel paths.', caption: 'More work. Deliberate parallelism.' },
  { id: 'reliability', label: 'Reliability', detail: 'A dependable path from input to output.', caption: 'Every connection has a purpose.' },
] as const;

export function SystemVisual() {
  const [mode, setMode] = useState<(typeof modes)[number]['id']>('flow');
  const selected = modes.find(item => item.id === mode)!;
  return <div className={`system-visual mode-${mode}`}>
    <div className="system-topline"><span><span className="tiny-cross">+</span> A STUDY IN SYSTEMS</span><span>01 — 03</span></div>
    <svg className="hero-system" viewBox="0 0 520 400" role="img" aria-labelledby="system-title system-desc">
      <title id="system-title">An abstract distributed system</title>
      <desc id="system-desc">{selected.detail} A conceptual illustration, not a depiction of Oracle infrastructure.</desc>
      <defs>
        <pattern id="system-grid" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".65" fill="#716a62" opacity=".26" /></pattern>
        <radialGradient id="system-light"><stop offset="0" stopColor="#dba078" stopOpacity=".09" /><stop offset="1" stopColor="#dba078" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="520" height="400" fill="url(#system-grid)" />
      <ellipse cx="266" cy="198" rx="220" ry="185" fill="url(#system-light)" />
      <g className="orbit-lines" fill="none" stroke="#b09276" strokeOpacity=".15"><ellipse cx="266" cy="200" rx="156" ry="156" /><ellipse cx="266" cy="200" rx="102" ry="102" /><path d="M266 25v350M90 200h352" strokeDasharray="2 7" /></g>
      <g className="system-paths" fill="none" stroke="#776654" strokeWidth="1.1">
        <path d="M71 200h53q14 0 14-14v-75q0-14 14-14h50" /><path d="M71 200h131" /><path d="M71 200h53q14 0 14 14v75q0 14 14 14h50" />
        <path d="M242 97h26q18 0 18 18v67M242 200h44M242 303h26q18 0 18-18v-67" />
        <path d="M322 200h35q14 0 14-14v-52q0-14 14-14h43M322 200h106M322 200h35q14 0 14 14v52q0 14 14 14h43" />
      </g>
      <g className="flow-pulses" fill="none" stroke="#e9aa82" strokeWidth="2" strokeDasharray="5 255"><path d="M71 200h53q14 0 14-14v-75q0-14 14-14h50" /><path d="M71 200h131" /><path d="M71 200h53q14 0 14 14v75q0 14 14 14h50" /><path d="M322 200h35q14 0 14-14v-52q0-14 14-14h43" /><path d="M322 200h106" /><path d="M322 200h35q14 0 14 14v52q0 14 14 14h43" /></g>
      <g className="input-node"><rect x="35" y="181" width="36" height="38" rx="5" fill="#181917" stroke="#70614f" /><path d="m44 195 5 5-5 5m9-5h9" fill="none" stroke="#c6b79f" strokeWidth="1.5" /><text x="53" y="242" textAnchor="middle">INPUT</text></g>
      {[97, 200, 303].map((y, i) => <g className={`service-node service-${i}`} key={y}><rect x="202" y={y - 20} width="40" height="40" rx="6" fill="#1b1b18" stroke="#907354" /><rect x="214" y={y - 8} width="16" height="16" rx="2" fill="none" stroke="#d9ac84" /><path d={`M218 ${y - 3}h8m-8 6h8`} stroke="#d9ac84" /></g>)}
      <text x="222" y="340" textAnchor="middle">SERVICES</text>
      <g className="junction"><circle cx="303" cy="200" r="20" fill="#252019" stroke="#c79567" /><circle cx="303" cy="200" r="7" fill="#e0a277" /><circle className="junction-ring" cx="303" cy="200" r="27" fill="none" stroke="#e0a277" strokeOpacity=".3" /></g>
      {[120, 200, 280].map(y => <g className="output-node" key={y}><rect x="428" y={y - 16} width="34" height="32" rx="5" fill="#191b18" stroke="#646e5c" /><path d={`m438 ${y} 5 5 9-10`} fill="none" stroke="#aebd94" strokeWidth="1.5" /></g>)}
      <text x="445" y="322" textAnchor="middle">CONSISTENCY</text>
      <g fill="#b4a18a"><circle cx="266" cy="44" r="2" /><circle cx="111" cy="200" r="2" /><circle cx="266" cy="356" r="2" /></g>
    </svg>
    <div className="system-controls" role="group" aria-label="Explore system concepts">{modes.map(item => <button type="button" key={item.id} aria-pressed={mode === item.id} onClick={() => setMode(item.id)}><span className="mode-dot" />{item.label}</button>)}</div>
    <p className="system-caption" aria-live="polite">{selected.caption}</p>
  </div>;
}
