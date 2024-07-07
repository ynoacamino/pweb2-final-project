import Icon1 from '@/components/icons/pillars/Icon1';
import Icon2 from '@/components/icons/pillars/Icon2';
import Icon3 from '@/components/icons/pillars/Icon3';
import { Button } from '@/components/ui/button';

const UTILITIES = [
  {
    Icon: Icon1,
    label: 'Aorende',
  },
  {
    Icon: Icon2,
    label: 'Crea',
  },
  {
    Icon: Icon3,
    label: 'Comparte',
  },
];
export default function Pillars() {
  return (
    <section className="w-full max-w-6xl flex flex-col items-center justify-start gap-10 px-6 my-40">
      <h1 className="text-4xl font-bold text-center">Nuestros pilares</h1>
      <div className="flex gap-10 justify-around items-center flex-wrap w-full max-w-4xl">
        {UTILITIES.map(({ Icon, label }) => (
          <div
            key={crypto.randomUUID()}
            className="bg-card rounded-md py-6 px-14 flex flex-col items-center justify-center gap-4 shadow-md"
          >
            <Icon className="w-28 h-28 m-4" />
            <span className="text-2xl font-semibold">{label}</span>
            <Button variant="secondary" size="icon" className="mt-4">
              -&gt;
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
