import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "./globals.scss";


export const metadata: Metadata = {
  title: "Pablo Ruiz",
  description: "Generated by create next app",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700","900"], });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}