import { profile, impact } from '../data/profile';
import { Reveal } from '../animations/Reveal';
import { SectionLabel } from '../components/SectionLabel';

export function Identity() {
  return <section id="identity" className="identity-section section container" aria-labelledby="identity-heading">
    <Reveal><SectionLabel number="02">SCALE & IMPACT</SectionLabel>
      <div className="identity-grid"><h2 id="identity-heading">Engineering at <span className="serif-emphasis">scale.</span></h2><p className="muted-copy">{profile.identityDescription}</p></div>
      <div className="impact-grid">{impact.map(item => <div className="impact-item" key={item.value}><strong>{item.value}</strong><span>{item.label}</span><p>{item.context}</p></div>)}</div>
    </Reveal>
  </section>;
}
