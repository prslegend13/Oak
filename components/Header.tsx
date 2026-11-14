import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return <header className="site-header"><nav aria-label="Main navigation" className="header-nav"><Link href="/" className="brand"><Image src="/oak-mediation-logo.png" alt="Oak Mediation & Conflict Resolution, LLC — Home" width={2172} height={724} priority sizes="(max-width: 412px) calc(100vw - 32px), (max-width: 760px) 380px, (max-width: 1000px) 390px, 430px" /></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/testimonials">Testimonials</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link><Link href="/book" className="btn">Book Mediation</Link></div></nav></header>;
}
