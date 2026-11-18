import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/site';
export const metadata: Metadata = { title: 'Mediation Services', description: 'Insurance, personal injury, employment, workplace, and business mediation with Oak Mediation.' };
export default function Services() {
  return <article className="prose-page"><p className="eyebrow">Constructive conversations. Practical solutions.</p><h1>Our Mediation Services</h1><p>Every dispute has its own circumstances and priorities. Oak Mediation provides an impartial, respectful setting for individuals, businesses, and their counsel to explore options and work toward a resolution they can shape.</p>{services.map(service => <section key={service.title}><h2>{service.title}</h2><p>{service.description}</p></section>)}<div className="mt-10"><Link href="/book" className="btn">Book Mediation</Link></div></article>;
}
