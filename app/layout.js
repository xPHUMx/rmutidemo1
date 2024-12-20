'use client'; // ใช้สำหรับ client-side

import { SessionProvider } from 'next-auth/react';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

