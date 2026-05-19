import type { Metadata } from "next";
import { Baloo_Thambi_2 } from "next/font/google";
import "./webflow.css";
import "./globals.css";
import DockNav from "@/components/DockNav";
import { ThemeProvider } from "@/components/theme-provider";
import GlobalClickSpark from "@/components/GlobalClickSpark";
import GlobalParticles from "@/components/GlobalParticles";

const baloo = Baloo_Thambi_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a Computer Science Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={baloo.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalClickSpark>
            <GlobalParticles />
            <div className="site-container relative">
              {children}
            </div>

            <DockNav />
          </GlobalClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}

