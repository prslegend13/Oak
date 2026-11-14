import Link from 'next/link';
import { business } from '@/lib/site';
export default function Footer() {
  return <footer className="site-footer"><div className="container-site footer-inner"><div><strong>{business.legalName}</strong><p>A thoughtful path toward resolution.</p></div><div className="footer-links"><Link href="/about">Meet Niamh</Link><Link href="/testimonials">Testimonials</Link><Link href="/contact">Contact</Link><Link href="/book">Book Mediation</Link><Link href="/privacy">Privacy &amp; Confidentiality</Link>{business.email !== 'info@example.com' && <a href={`mailto:${business.email}`}>{business.email}</a>}</div></div></footer>;
}
