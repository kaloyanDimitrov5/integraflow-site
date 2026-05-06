export const metadata = {
  title: 'IntegraFlow',
  description: 'AI Automation • Integrations • Software Solutions',
};

export default function AppRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
