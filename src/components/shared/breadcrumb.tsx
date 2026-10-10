import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="section-container py-3 sm:py-4"
    >
      <ol className="flex items-center gap-1.5 text-xs sm:text-sm flex-wrap text-stone-500">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#002617] text-[#0a5232] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>முகப்பு</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 flex-shrink-0 text-stone-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#002617] text-[#0a5232] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-800 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
