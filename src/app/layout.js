import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ClientWrapper from "../components/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rahul Kumar | Intelligence System",
  description: "Advanced Full-Stack Developer & System Architect specializing in the MERN stack, Data Science, and Cinematic Digital Experiences.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Rahul Kumar | Intelligence System",
    description: "Crafting the future of digital intelligence through code and design.",
    url: "https://rahulkumar.dev", // Placeholder, user will update
    siteName: "Rahul Kumar Portfolio",
    locale: "en_US",
    type: "website",
  }
};

function RootLayout({ children }) {
  const hasClerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith('pk_') && 
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('placeholder');

  const AppContent = () => (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased selection:bg-blue-500 selection:text-white`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );

  if (hasClerkKey) {
    return (
      <ClerkProvider>
        <AppContent />
      </ClerkProvider>
    );
  }

  return <AppContent />;
}

export default RootLayout;
