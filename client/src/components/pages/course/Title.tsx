import Image from 'next/image';

export default function Title({ image, name }: { image: string, name: string }) {
  return (
    <section className="w-full flex flex-col gap-4">
      <Image
        src={image}
        alt={name}
        width={800}
        height={800}
        className="w-full object-cover aspect-video rounded-md"
      />
      <h1 className="text-3xl font-bold">
        {name}
      </h1>
    </section>
  );
}
