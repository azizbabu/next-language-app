// clsx is generally used to conditionally apply a given className
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({ children }) {
  // Get locale and messages server-side
  const locale = await getLocale();
  const messages = await getMessages();

  // Convert messages to a plain object if needed
  // You may need to serialize or filter out non-serializable values
  const serializedMessages = JSON.parse(JSON.stringify(messages)); // Ensure it is a plain object

  return (
    <html lang={locale}>
      <head>
        <title>next-intl example</title>
      </head>
      <body
        className={clsx(
          'flex min-h-[100vh] flex-col bg-slate-100',
          inter.className
        )}
      >
        <NextIntlClientProvider messages={serializedMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

