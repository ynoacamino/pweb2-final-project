import Link from 'next/link';
import { PlayIcon } from 'lucide-react';

export default function Sections({ sections }: { sections: { name:string, url:string }[] }) {
  return (
    <section className="bg-card rounded-md w-full flex flex-col gap-3 px-8 py-6">
      <h1 className="text-2xl font-semibold">Secciones: </h1>
      <ul className="flex flex-col gap-1">
        {sections.map(({ name, url }) => (
          <li key={crypto.randomUUID()}>
            <Link href={url} className="flex gap-2 items-center hover:bg-foreground/10 rounded-md px-4 py-3">
              <PlayIcon />
              <span>
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
