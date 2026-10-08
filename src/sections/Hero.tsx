import { profile } from '../data/profile';
import { links } from '../data/links';
import { Icon } from '../components/Icon';
import { SystemVisual } from '../components/SystemVisual';

export function Hero() {
  return <section className="hero container" id="home" aria-labelledby="hero-heading">
    <div className="hero-content">
      <div className="eyebrow hero-eyebrow"><span className="status-dot" />{profile.context.toUpperCase()}</div>
      <h1 id="hero-heading">{profile.name}<span>.</span></h1>
      <p className="hero-role">{profile.title} <span className="at-oracle">@ {profile.company}</span></p>
      <p className="hero-tagline">{profile.tagline}</p>
      <p className="hero-introduction">{profile.introduction}</p>
      <div className="hero-actions"><a className="button button-primary" href="#work">View my work <Icon name="arrow" /></a><a className="button button-secondary" href={links.resume} download>Download résumé <Icon name="download" width="17" height="17" /></a></div>
      <div className="hero-socials"><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" width="16" height="16" />LinkedIn <Icon name="arrowUp" width="12" height="12" /></a><a href={links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" width="16" height="16" />GitHub <Icon name="arrowUp" width="12" height="12" /></a><a href={links.email}><Icon name="mail" width="16" height="16" />Email <Icon name="arrowUp" width="12" height="12" /></a></div>
    </div>
    <SystemVisual />
    <div className="hero-bottom"><span>BACKEND · DISTRIBUTED SYSTEMS · APPLIED AI</span><a href="#work">Explore selected work <span>↓</span></a></div>
  </section>;
}
