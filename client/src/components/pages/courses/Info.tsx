import { Button } from '@/components/ui/button';

export default function Info() {
  return (
    <section className="w-full max-w-6xl flex flex-col gap-10 my-20 shadow-lg">
      <article className="w-full rounded-md bg-card p-8 flex gap-10 flex-col lg:flex-row items-center">
        <img
          src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1719160177/jbarsqhcz83x8mp4l27a.png"
          alt="Certificaciones"
          width={400}
          height={400}
          className="rounded-md aspect-square"
        />
        <div className="flex flex-col flex-1 items-center justify-center gap-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Conviertete en un profesional
          </h1>
          <p className="text-lg md:text-xl text-center w-full max-w-lg">
            Ofrecemos una amplia gama de cursos impartidos a millones de estudiantes en
            Learning, diseñados para cubrir diversas áreas de conocimiento y adaptarse a
            las demandas del mercado actual.
          </p>
          <Button>
            Comienza ahora
          </Button>
        </div>
      </article>
    </section>
  );
}
