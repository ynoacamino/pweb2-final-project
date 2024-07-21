export default function Coment({
  name, comment, imageUrl, date,
}: {
  name: string;
  comment: string;
  imageUrl: string;
  date: string;
}) {
  return (
    <div className="w-full p-4 rounded-lg bg-card flex flex-col gap-6">
      <div className="flex gap-4 items-center justify-start">
        <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full" />
        <h1>{name}</h1>
        <p>{date}</p>
      </div>
      <div className="ml-10">
        {comment}
      </div>
    </div>
  );
}
