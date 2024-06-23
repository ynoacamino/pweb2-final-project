import { Button } from '@/components/ui/button';

export default function Title() {
  return (
    <section className="w-full max-w-6xl flex flex-col items-center justify-center gap-8 my-40">
      <h1 className="w-full flex flex-col items-center justify-center font-bold">
        <span className="text-5xl text-center">Aprende a programar y desarrollar</span>
        <span className="text-6xl text-primary text-center">con Learning</span>
      </h1>
      <p className="w-full max-w-sm text-center">
        la plataforma que te ayuda a mejorar tus habilidades en programación.
      </p>
      <div className="flex items-center gap-4 text-lg">
        <Button variant="secondary" size="lg">
          Ver mas →
        </Button>
        <Button size="lg">
          Comienza ahora
        </Button>
      </div>
    </section>
  );
}
