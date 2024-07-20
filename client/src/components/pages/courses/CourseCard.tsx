import Link from 'next/link';

export default function CourseCard(
  {
    name, description, image, curso_id,
  }:
  { name: string, description: string, image: string, curso_id: string },
) {
  return (
    <Link href={`/curso/${curso_id}`} className="w-full max-w-sm px-4">
      <div className="w-full flex flex-col items-center justify-start gap-4 rounded-md bg-card h-96 shadow-lg">
        <img
          src={image}
          alt={name}
          width={300}
          height={200}
          className="rounded-t-md aspect-video w-full"
        />
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center">{name}</h2>
          <div className="w-full border border-b border-foreground" />
          <p className="text-center">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
