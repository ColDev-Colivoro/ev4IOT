import { Router } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-foreground"
        >
          <Router className="h-6 w-6 text-primary" />
          <span className="font-headline">SmartRamp</span>
        </Link>
      </div>
    </header>
  );
}
