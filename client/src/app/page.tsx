import Pillars from '@/components/pages/home/Pillars';
import Title from '@/components/pages/home/Title';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: ' Home | Learning ',
  description: 'Pagina Principal de mi aplicacion',
}

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Title />
      <Pillars />
    </main>
  );
}
