import CourseCard from '../courses/CourseCard';

export default function RelatedCourses() {
  return (
    <section className="w-full flex flex-col gap-5">
      <h1 className="text-3xl font-bold">
        Cursos relacionados:
      </h1>
      <div className="flex flex-wrap justify-around items-center gap-y-10">
        {Array.from({ length: 3 }).map(() => (
          <CourseCard
            curso_id="1"
            key={crypto.randomUUID()}
            name="Curso de React"
            description="Aprende React desde cero"
            image="https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png"
          />
        ))}
      </div>
    </section>
  );
}
