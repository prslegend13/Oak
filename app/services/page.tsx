import Link from 'next/link';
import { services } from '@/lib/site';
export default function Services(){return <article className="prose-page"><h1>Our Mediation Services</h1>{services.map(s=><section key={s.title}><h2>{s.title}</h2><p>{s.description}</p></section>)}<p>Confirm offered services, fees, duration, refund policy, and scope of representation before publishing.</p><Link href="/book" className="btn">Book Mediation</Link></article>}
