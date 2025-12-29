import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors tracking-tight">
            Unheard Stories
          </Link>
          <div className="flex space-x-10">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm uppercase tracking-wide">
              Home
            </Link>
            <Link href="/stories" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm uppercase tracking-wide">
              Stories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm uppercase tracking-wide">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

