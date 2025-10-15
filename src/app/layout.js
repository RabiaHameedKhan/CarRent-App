import './globals.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';

export const metadata = {
  title: 'Rent-A-Car',
  description: 'A modern car rental web app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
