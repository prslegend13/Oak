# Oak Mediation — Next.js + Calendly + Stripe Starter

A functional informational website with Calendly inline scheduling. Stripe payments are configured in Calendly, **not in application code**.

## Prerequisites
- Node.js 20.9+ (Node 22 LTS recommended)
- Calendly account with a published event type
- Stripe account connected to Calendly, and a Calendly plan that supports payment collection

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local`.
3. Replace `NEXT_PUBLIC_CALENDLY_URL` with your actual Calendly event-type URL (e.g. `https://calendly.com/oak-mediation/consultation`).
4. Set `NEXT_PUBLIC_CONTACT_EMAIL` to your real business email.
5. `npm run dev` and open `http://localhost:3000`.

## Calendly and Stripe setup
1. In Calendly, create event types for consultation and any paid mediation services.
2. Connect your mediator's Google/Microsoft calendar and configure availability, time zone, buffers, and advance notice.
3. In Calendly integrations, connect Stripe; configure a price for each paid event type and test the full checkout flow. Feature availability depends on plan and country.
4. For services requiring conflict screening, use an unpaid screening event first, then send an approved paid event link.
5. Copy a public event-type URL into `.env.local`. For multiple event types, extend `CalendlyBooking` to accept a URL prop and make one route per event.

## Deploy
1. Push the project to a private GitHub repository.
2. Import the repository into Vercel.
3. Configure the two NEXT_PUBLIC_* environment variables in Vercel.
4. Add your custom domain and verify HTTPS.
5. Complete a real end-to-end test in a controlled setting before launch.

## Production checklist
- Replace placeholder text, verify services, credentials, fees, and business contact details.
- Publish a legally reviewed privacy policy, terms, cancellation/refund policy, and intake/conflict-screening process.
- Turn on MFA in Vercel, Calendly, Stripe, email, and domain registrar.
- Review Calendly event questions; do not collect sensitive case narratives in the public scheduling widget.
- Check Stripe payment behavior, refunds, booking confirmation, calendar sync, time zones, mobile layout, accessibility, and notification content.
- Confirm provider data-processing terms, retention, access restrictions, and applicable mediation confidentiality requirements.
- Add approved logo as `public/logo.png` and update Header to render it if desired.

## Important
- The Calendly iframe and Stripe are hosted services; payment data is not handled by this Next.js app.
- This starter does not include a secure client intake portal, staff dashboard, conflict screening automation, or custom database.
- It has not been validated with live provider credentials in this environment.
