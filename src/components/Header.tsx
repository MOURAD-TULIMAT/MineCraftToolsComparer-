'use client'; // Required for using hooks in Next.js 13+

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white p-4 border-b border-gray-700">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">MineCraft Tools Comparer</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/tools-comparer"
              className={`hover:text-gray-400 ${
                pathname === '/tools-comparer' ? 'text-yellow-400' : ''
              }`}
            >
              Tools Comparer
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`hover:text-gray-400 ${
                pathname === '/about' ? 'text-yellow-400' : ''
              }`}
            >
              About the App
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className={`hover:text-gray-400 ${
                pathname === '/support' ? 'text-yellow-400' : ''
              }`}
            >
              Support Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}