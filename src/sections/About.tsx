import { experience } from '../data/experience';
import { skills } from '../data/skills';
import { achievements, certifications, education } from '../data/achievements';
import { profile } from '../data/profile';
import { links } from '../data/links';
import { Reveal } from '../animations/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Icon } from '../components/Icon';

export function About() {
  return <section className="about-section section container" id="about" aria-labelledby="about-heading"><Reveal><SectionLabel number="03">THE ENGINEER</SectionLabel><div className="section-heading"><h2 id="about-heading">A growing scope.<br /><span className="serif-emphasis">A steady foundation.</span></h2><p>From feature delivery to technical ownership.<br />One platform. Increasing responsibility.</p></div></Reveal>
    <div className="about-grid"><Reveal className="timeline"><div className="subsection-label">AT ORACLE / 2023 — NOW</div>{experience.map(item => <div className={`timeline-item ${item.current ? 'is-current' : ''}`} key={item.title}><span className="timeline-point" /><div className="timeline-meta"><span>{item.period}</span>{item.current && <span className="current-badge">CURRENT · IC2</span>}</div><h3>{item.title}</h3><p>{item.detail}</p><span className="timeline-focus">{item.focus}</span></div>)}</Reveal>
      <Reveal className="technical-profile"><div className="subsection-label">A PRACTICAL TOOLKIT</div>{skills.map(group => <div className="skill-group" key={group.category}><h3>{group.category}</h3><p>{group.items.join(' · ')}</p></div>)}<a className="text-link github-link" href={links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" />Find me on GitHub<Icon name="arrowUp" width="15" height="15" /></a></Reveal></div>
    <Reveal><div className="credentials-grid"><div><div className="subsection-label">RECOGNITION</div><ul className="recognition-list">{achievements.map(item => <li key={item}>{item}</li>)}</ul></div><div><div className="subsection-label">FOUNDATIONS</div><h3 className="school-name">{education.school}</h3><p className="education-detail">{education.degree}<span>{education.period}</span></p><div className="certifications">{certifications.map(item => <span key={item}>{item}</span>)}</div></div></div>
      <div className="personal-layer"><div><span className="subsection-label">AWAY FROM THE KEYBOARD</span><p>A few other things I make time for.</p></div><div className="interest-list">{profile.interests.map(item => <span key={item}>{item}</span>)}</div></div>
    </Reveal>
  </section>;
}
