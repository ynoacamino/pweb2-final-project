import Link from 'next/link';
import { PlayIcon } from 'lucide-react';
import { useFetch } from '../fetch/useFetch';

export default function Sections({ cursoID }: { cursoID: string }) {
  const data = useFetch(`http://localhost:8000/academia/api/curso/${cursoID}/`) as any;

  const sections = data?.sections as {
    name: string
  }[] || [] as { name: string }[];

  return (
    <section className="bg-card rounded-md w-full flex flex-col gap-3 px-8 py-6">
      <h1 className="text-2xl font-semibold">Secciones: </h1>
      <ul className="flex flex-col gap-1">
        {sections.map(({ name }) => (
          <li key={crypto.randomUUID()}>
            <Link href="/" className="flex gap-2 items-center hover:bg-foreground/10 rounded-md px-4 py-3">
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
