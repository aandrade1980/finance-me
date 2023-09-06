import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
import { Providers } from './providers';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinanceMe',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(inter.className, 'dark')}
        style={{ colorScheme: 'dark' }}
      >
        <body>
          <Providers>
            <div className="flex min-h-screen w-full flex-col items-center">
              <NavBar />
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
