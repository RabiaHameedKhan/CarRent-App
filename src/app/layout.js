import './globals.css';

export const metadata = {
  title: 'My Car Project',
  description: 'A car rental web app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
