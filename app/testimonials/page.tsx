import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: 'Testimonials', description: 'Oak Mediation testimonial layout preview. Sample wording only; not actual client reviews.', robots: { index: false, follow: false } };
const samples = [
  'We appreciated having space to explain what mattered to us before discussing possible solutions. The conversation felt more manageable when each concern was considered in turn.',
  'Clear preparation made a difficult discussion easier to approach. We understood the process, knew what to bring, and arrived ready to participate.',
  'A calm, respectful setting helped us discuss issues that had been hard to address on our own. We could focus on the decisions ahead rather than revisit every disagreement.',
  'The most helpful part was looking beyond our initial positions. Exploring the reasons behind them opened up possibilities we had not considered.',
  'Our workplace disagreement involved both practical concerns and strained relationships. Making room for both helped us have a more useful conversation.',
  'We valued a process that encouraged questions and gave us time to weigh our options. We wanted to understand our choices rather than feel rushed into one.',
  'Insurance questions had complicated our discussions. Addressing the practical issues alongside the broader dispute gave the conversation a clearer direction.',
  'The discussion helped us compare the demands of continuing the dispute with the possibilities of an agreement. That perspective was useful when deciding our next steps.',
  'It mattered that we could raise concerns without the conversation becoming adversarial. A steady, constructive process made it easier to keep talking.',
  'We needed an approach that recognized our business priorities as well as our differing views. Working through the details helped identify options worth exploring.',
  'Being heard did not mean everyone had to agree. It meant our concerns were understood well enough for a more thoughtful negotiation to take place.',
  'We appreciated the attention given to the practical details of moving forward. A useful conversation considers not only an agreement, but how it could work in everyday life.',
];
export default function Testimonials() {
  return <><section className="testimonials-heading container-site"><p className="eyebrow">Perspectives on the mediation process</p><h1>Testimonials</h1><span className="gold-rule" /><p>A place for the experiences and perspectives of those who work with Oak Mediation.</p></section><section className="container-site testimonial-list" aria-label="Sample testimonials"><div className="sample-notice"><strong>Sample wording for review — not actual client testimonials.</strong><p>These 12 fictional examples demonstrate the page layout. They do not describe actual clients, cases, or results and will be replaced with approved, genuine feedback.</p></div>{samples.map((quote, i) => <figure className="testimonial-quote" key={quote}><blockquote><p>“{quote}”</p></blockquote><figcaption>Illustrative sample {String(i + 1).padStart(2, '0')} · Not a client review</figcaption></figure>)}<div className="section-space"><h2>Let’s talk about your next step.</h2><p className="my-6">Contact us to explore whether mediation could help with your dispute.</p><Link className="btn" href="/contact">Contact Oak Mediation <span aria-hidden="true">↗</span></Link></div></section></>;
}
