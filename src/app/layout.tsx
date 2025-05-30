import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONVI - Автомойки по пути",
  description: "Удобное приложение для поиска моек самообслуживания рядом с вами. Оплата услуг, кешбэк и более 80 партнёров в 10 регионах России.",
  metadataBase: new URL('https://onvione.ru'),
  keywords: ['онви', 'автомойка', 'онлайн оплата', 'кешбэк', 'мобильное приложение'],
  authors: [{ name: 'Onvione', url: 'https://onvione.ru' }],
  openGraph: {
    title: 'ONVI - Автомойки по пути',
    description: 'Удобное приложение для поиска моек самообслуживания рядом с вами',
    url: 'https://onvione.ru',
    siteName: 'ONVI',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/onvi-mobile-landing/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/onvi-mobile-landing/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/onvi-mobile-landing/favicon-16x16.png" />
        <link rel="manifest" href="/onvi-mobile-landing/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
