import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Icon } from './components/Icon';
import { Hero } from './sections/Hero';
import { Identity } from './sections/Identity';
import { Work } from './sections/Work';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { profile } from './data/profile';

export default function App() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    try { setPaused(localStorage.getItem('anas-motion') === 'paused'); } catch { /* Storage is optional. */ }
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'enabled';
  }, [paused]);
  function toggleMotion() {
    const next = !paused;
    setPaused(next);
    try { localStorage.setItem('anas-motion', next ? 'paused' : 'enabled'); } catch { /* Storage is optional. */ }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main"><Hero /><Work /><Identity /><About /><Contact /></main>
    <footer className="site-footer container"><span>© 2026 {profile.name}</span><span className="footer-note">Thoughtfully engineered. Personally made.</span><button type="button" className="motion-toggle" onClick={toggleMotion} aria-pressed={paused}><Icon name={paused ? 'play' : 'pause'} width="13" height="13" />{paused ? 'Enable motion' : 'Pause motion'}</button><a className="back-top" href="#home">Back to top ↑</a></footer>
  </>;
}
