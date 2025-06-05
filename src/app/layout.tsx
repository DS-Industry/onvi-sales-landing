import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

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
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
