import type { Metadata } from 'next';
import CalendlyBooking from '@/components/CalendlyBooking';
export const metadata: Metadata = { title: 'Book Mediation', description: 'Schedule mediation with Oak Mediation. Half-day rate: $2,500. Full-day rate: $4,500.' };
export default function Book() {
  return <section className="container-site booking-page"><div className="booking-heading"><p className="eyebrow">A thoughtful path toward resolution</p><h1>Book Mediation</h1><span className="gold-rule" /><p>Find a time to move forward.</p></div><CalendlyBooking/><p className="booking-disclaimer">Please do not include confidential dispute details in booking notes. Scheduling does not establish a mediator-client relationship or guarantee acceptance of a matter. Conflict screening and applicable service agreements may be required.</p></section>;
}
