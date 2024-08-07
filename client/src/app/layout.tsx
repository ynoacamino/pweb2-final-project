import type { Metadata } from 'next';
import './globals.css';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/libraries/utils';
import { Header } from '@/components/pages/global/Header';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Footer from '@/components/pages/global/Footer';

import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/components/providers/AuthProvider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Learning',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={
        cn(
          'min-h-screen bg-background/100 font-sans antialiased w-full bg-stone-300 dark:bg-zinc-900 flex flex-col items-center',
          fontSans.variable,
        )
      }
      >
        <AuthProvider>
          <ThemeProvider>
            <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-t from-stone-300 to-neutral-100 dark:from-zinc-900 dark:to-slate-800 -z-50" />
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
