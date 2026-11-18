import type { Metadata } from 'next';
import CalendlyBooking from '@/components/CalendlyBooking';
export const metadata: Metadata = { title: 'Book Mediation', description: 'Schedule mediation with Oak Mediation. Half-day mediation (4 hours): $3,600. Full-day mediation (8 hours): $4,800. Pre-mediation calls and advance document review included.' };
export default function Book() {
  return <section className="container-site booking-page"><div className="booking-heading"><p className="eyebrow">A thoughtful path toward resolution</p><h1>Book Mediation</h1><span className="gold-rule" /><p>Find a time to move forward.</p></div><CalendlyBooking/><p className="booking-disclaimer">Please do not include confidential dispute details in booking notes. Scheduling does not establish a mediator-client relationship or guarantee acceptance of a matter. Conflict screening and applicable service agreements may be required.</p></section>;
}
