import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = { title:{default:'Oak Mediation | Conflict Resolution',template:'%s | Oak Mediation'}, description:'Professional mediation services focused on respectful, constructive resolution.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main id="main">{children}</main><Footer/></body></html>}
