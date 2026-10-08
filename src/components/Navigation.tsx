import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { profile } from '../data/profile';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <header className="site-header">
    <div className="container header-inner">
      <a className="wordmark" href="#home" onClick={() => setOpen(false)} title="Back to top"><span className="monogram" aria-hidden="true">am<span>.</span></span><span className="wordmark-name">{profile.name}<span>{profile.title.toUpperCase()}</span></span></a>
      <button ref={button} className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
      <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <a href="#work" onClick={() => setOpen(false)}>Selected work</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <Icon name="arrowUp" width="15" height="15" /></a>
      </nav>
    </div>
  </header>;
}
