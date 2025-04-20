import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

import ChatBoxButton from "@/components/ui/chat-box-btn";
import LocaleSwitcher from "@/components/ui/locale-switcher";
import ThemeSwitch from "@/components/ui/theme-switch";

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

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#b5daff] blur-[10rem] dark:bg-[#184068] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeContextProvider>
          <NextIntlClientProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <ChatBoxButton />
              <div className="fixed right-5 top-5 flex space-x-2">
                <LocaleSwitcher />
                <ThemeSwitch />
              </div>
            </ActiveSectionContextProvider>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
