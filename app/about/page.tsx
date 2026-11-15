import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import content from '@/lib/about-content.json';
export const metadata: Metadata = { title: 'About Niamh Doherty' };
const headings = ['Mediation Approach', 'Litigation Experience', 'Education & Professional Training', 'Beyond Mediation', 'A Better Path Forward'];
export default function About() {
  const firstSection = content.indexOf(headings[0]);
  return <div className="about-page">
    <section className="about-heading container-site"><p className="eyebrow">About Oak Mediation</p><h1>{content[0]}</h1><span className="gold-rule" /><p>{content[1]}</p></section>
    <article className="container-site about-layout">
      <aside className="about-sidebar"><div className="about-photo"><Image src="/niamh-about.webp" alt="Niamh Doherty smiling beside an oak tree" width={1400} height={934} priority sizes="(max-width: 760px) 100vw, 42vw" /><p className="photo-note">A thoughtful path toward resolution.</p></div><a className="btn cv-button" href="/Oak_Mediation_CV_V1.pdf" target="_blank" rel="noopener noreferrer">Curriculum Vitae <span aria-hidden="true">↗</span><span className="sr-only"> (PDF, opens in a new tab)</span></a><nav className="bio-contents" aria-label="About page sections">{headings.map((heading, i) => <a key={heading} href={`#bio-section-${i}`}>{heading}<span aria-hidden="true">↓</span></a>)}</nav></aside>
      <div className="biography">{content.slice(2, firstSection).map((p, i) => <p key={p} className={i === 0 ? 'biography-lead' : undefined}>{p}</p>)}{headings.map((heading, i) => {
        const start = content.indexOf(heading);
        const end = i + 1 < headings.length ? content.indexOf(headings[i + 1]) : content.length;
        return <section key={heading} id={`bio-section-${i}`} className={i === headings.length - 1 ? 'about-invitation' : 'bio-section'}><h2>{heading}</h2>{content.slice(start + 1, end).map((p, j) => <p key={p} className={i === 0 && j === 0 ? 'bio-subtitle' : undefined}>{p}</p>)}{i === headings.length - 1 && <Link className="btn" href="/book">Book Mediation <span aria-hidden="true">↗</span></Link>}</section>;
      })}</div>
    </article>
  </div>;
}
