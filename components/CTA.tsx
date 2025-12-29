import Link from 'next/link';

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function CTA({ href, children, variant = 'primary' }: CTAProps) {
  const baseClasses = "inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200";
  const variantClasses = variant === 'primary'
    ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl"
    : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}

