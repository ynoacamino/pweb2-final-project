import Logo from '@/components/icons/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import Link from 'next/link';
import Access from './Access';

export function Header() {
  const LINKS = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Cursos',
      path: '/cursos',
    },
    {
      label: 'Planes',
      path: '/planes',
    },
  ];

  return (
    <header className="w-full px-6 flex justify-center items-center sticky top-0 backdrop-blur-md bg-neutral-100/40 dark:bg-slate-800/40 z-50">
      <div className="w-full max-w-6xl py-4 flex justify-between">
        <Link href="/" className="flex items-center gap-1 text-3xl font-bold text-primary">
          <Logo className="w-10 h-10" />
          <span>
            earning
          </span>
        </Link>

        <nav className="flex gap-6 items-center">
          {
            LINKS.map(({ label, path }) => (
              <Link key={label} href={path} className="hover:underline">
                {label}
              </Link>
            ))
          }
          <Access />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
