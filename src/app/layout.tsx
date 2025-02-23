import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}