import { links } from '../data/links';
import { Reveal } from '../animations/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { Icon } from '../components/Icon';

export function Contact() {
  return <section className="contact-section section" id="contact" aria-labelledby="contact-heading"><div className="container"><Reveal><SectionLabel number="04">A CONVERSATION STARTS HERE</SectionLabel><div className="contact-grid"><div><h2 id="contact-heading">Good work starts<br />with a <span className="serif-emphasis">conversation.</span></h2><p>About systems, engineering, or what comes next.</p><a className="contact-email" href={links.email}>{links.emailLabel}<Icon name="arrowUp" width="25" height="25" /></a></div><div className="contact-links"><a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /><span>LinkedIn</span><Icon name="arrowUp" width="15" height="15" /></a><a href={links.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /><span>GitHub</span><Icon name="arrowUp" width="15" height="15" /></a><a href={links.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" /><span>WhatsApp</span><Icon name="arrowUp" width="15" height="15" /></a><a href={links.phone}><Icon name="phone" /><span>{links.phoneLabel}</span><Icon name="arrowUp" width="15" height="15" /></a><a href={links.instagram} target="_blank" rel="noopener noreferrer"><Icon name="instagram" /><span>Instagram</span><Icon name="arrowUp" width="15" height="15" /></a></div></div></Reveal></div></section>;
}
