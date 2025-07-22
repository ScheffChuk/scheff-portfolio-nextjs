import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import "./globals.css";

import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import backgroundImage from "@/assets/bg-img.jpg";
import ChatBoxButton from "@/components/ui/chat-box-btn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scheff Chuk",
  description:
    "A full-stack developer in training. I learn by building sites & apps, focusing primarily on the React/Next.js ecosystem and Node.js backend development. Currently exploring AI agent development too.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <Image
          src={backgroundImage}
          alt="background"
          placeholder="blur"
          quality={50}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          className="fixed inset-0 z-[-1] opacity-55 dark:opacity-35"
          priority={true}
          loading="eager"
        />
        <ThemeContextProvider>
          <NextIntlClientProvider>
            <ActiveSectionContextProvider>
              {children}
              <Toaster position="top-right" />
              <ChatBoxButton />
            </ActiveSectionContextProvider>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
