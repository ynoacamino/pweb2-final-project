export default function Description({ description }: { description: string }) {
  return (
    <section className="bg-card rounded-md w-full flex flex-col gap-3 px-8 py-6">
      <h1 className="text-2xl font-semibold">Descripcion: </h1>
      <span className="text-lg">
        {description}
      </span>
    </section>
  );
}
