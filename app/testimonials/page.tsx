import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read client testimonials about their experience with Oak Mediation.',
};

const testimonials = [
  "With your help, I was able to settle a case that has been very difficult to deal with and I believe settlement was out of reach until you stepped in.",
  "I'm so grateful to have worked with you and so glad this has settled. Thank you for your guidance through this process.",
];

export default function Testimonials() {
  return <>
    <section className="testimonials-heading container-site">
      <p className="eyebrow">Perspectives on the mediation process</p>
      <h1>Testimonials</h1>
      <span className="gold-rule" />
      <p>Experiences shared by clients of Oak Mediation.</p>
    </section>
    <section className="container-site testimonial-list" aria-label="Client testimonials">
      {testimonials.map(quote => <figure className="testimonial-quote" key={quote}>
        <blockquote><p>“{quote}”</p></blockquote>
        <figcaption>Anonymous</figcaption>
      </figure>)}
      <div className="section-space">
        <h2>Let’s talk about your next step.</h2>
        <p className="my-6">Contact us to explore whether mediation could help with your dispute.</p>
        <Link className="btn" href="/contact">Contact Oak Mediation <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </>;
}
