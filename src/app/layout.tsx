import "./globals.css";
import GlobalBackground from '@/components/GlobalBackground';

export const metadata = {
  title: "IntegraFlow",
  description: "AI Automation • Integrations • Software Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#020409] text-white">
        <GlobalBackground />

        {children}
      </body>
    </html>
  );
}
