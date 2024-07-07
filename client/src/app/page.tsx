import Pillars from '@/components/pages/home/Pillars';
import Title from '@/components/pages/home/Title';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Title />
      <Pillars />
    </main>
  );
}
