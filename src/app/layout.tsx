import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import Navbar from '@/components/shared/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Organiza y Administra Torneos de Fútbol',
  description: 'Una app web gratuita que será tu mejor aliada organizando campeonatos de fútbol',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}