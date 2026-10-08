import type { SVGProps } from 'react';

type Name = 'arrow' | 'arrowUp' | 'download' | 'plus' | 'close' | 'menu' | 'play' | 'pause' | 'mail' | 'github' | 'linkedin' | 'phone' | 'instagram' | 'whatsapp';
const paths: Record<Name, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  arrowUp: <><path d="M6 18 18 6M6 6h12v12" /></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 8h16M4 16h16" />,
  play: <path d="m8 5 11 7-11 7z" />,
  pause: <><path d="M8 5v14M16 5v14" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m13 5v-4c0-1-.3-2-1-2.5 3-.3 6-1.5 6-5a5 5 0 0 0-1.5-3.5c.4-1 .4-2.5-.2-3.5 0 0-1.3-.4-4.3 1.6a14 14 0 0 0-6 0C6 3.1 4.7 3.5 4.7 3.5c-.6 1-.6 2.5-.2 3.5A5 5 0 0 0 3 10.5c0 3.5 3 4.7 6 5-.7.5-1 1.5-1 2.5v4" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  phone: <path d="m8 3-4 1c-2 1 0 7 4 11s10 6 11 4l1-4-5-2-2 2-4-4 2-2z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  whatsapp: <><path d="M20 11.5a8.5 8.5 0 0 1-12.8 7.3L3 20l1.2-4.2A8.5 8.5 0 1 1 20 11.5Z" /><path d="M8 7c-2 2 4 8 6 6l1-2-2-1-1 1-2-2 1-1-1-2z" /></>,
};
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: Name }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
