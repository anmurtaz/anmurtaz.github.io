import { useState } from 'react';
import { projects, type Project } from '../data/projects';
import { Reveal } from '../animations/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { WorkVisual } from '../components/WorkVisual';
import { Icon } from '../components/Icon';

function CaseStudy({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  return <article className={`case-study case-${project.illustration}`} id={project.id}>
    <div className="case-overview"><div className="case-copy"><div className="case-category"><span>{project.number}</span>{project.category}</div><h3>{project.title}</h3><p className="case-subtitle">{project.subtitle}</p><p>{project.description}</p><div className="case-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><button className="case-toggle" type="button" aria-expanded={expanded} aria-controls={`${project.id}-details`} onClick={() => setExpanded(!expanded)}>{expanded ? 'Close the engineering story' : 'Inside the engineering'}<Icon name={expanded ? 'close' : 'plus'} width="17" height="17" /></button></div><WorkVisual kind={project.illustration} /></div>
    <div id={`${project.id}-details`} className="case-details" hidden={!expanded}><div className="case-detail-grid">{[{ label: 'The problem', text: project.problem }, { label: 'The approach', text: project.approach }, { label: 'Engineering decision', text: project.decision }, { label: 'The outcome', text: project.outcome }].map(item => <div key={item.label}><h4>{item.label}</h4><p>{item.text}</p></div>)}</div><div className="case-technologies">{project.technologies.map(item => <span key={item}>{item}</span>)}</div>{project.illustration === 'security' && <p className="illustration-note">The visual above illustrates the documented workflow. It is not a screenshot of the product.</p>}</div>
  </article>;
}

export function Work() {
  return <section className="work-section section container" id="work" aria-labelledby="work-heading"><Reveal><SectionLabel number="01">ENGINEERING AT ORACLE</SectionLabel><div className="section-heading"><h2 id="work-heading">Selected engineering <span className="serif-emphasis">work.</span></h2><p>Oracle Aconex systems and engineering tools.<br />The problems, decisions, and outcomes.</p></div></Reveal><div className="case-studies">{projects.map(project => <Reveal key={project.id}><CaseStudy project={project} /></Reveal>)}</div></section>;
}
