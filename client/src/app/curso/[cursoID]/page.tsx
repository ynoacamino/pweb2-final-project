import Description from '@/components/pages/course/Description';
import RelatedCourses from '@/components/pages/course/RelatedCourses';
import Sections from '@/components/pages/course/Sections';
import Title from '@/components/pages/course/Title';

import  { useFetch } from '../../../components/pages/fetch';

const getData = async ({ id }: { id: string }) => {
  const course = useFetch(`http://localhost:8000/academia/api/curso/${id}`); 
  return course;
};

export default async function CursoPage({ params }: { params: { cursoID: string } }) {
  const data = await getData({ id: params.cursoID });

  return (
    <main className="w-full grid md:grid-cols-3 max-w-6xl mt-14 mb-20 gap-y-10">
      <div className="md:col-span-2 flex flex-col w-full px-4 gap-10">
        <Title image={data.image_url} name={data.name} />
        <Description description={data.description} />
        <Sections sections={data.sections} />
      </div>
      <div className="flex flex-col w-full px-4 gap-10">
        <section className="bg-card rounded-md w-full flex flex-col gap-3 px-8 py-6">
          <h1 className="text-2xl">Que incluye este curso:</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat corrupti laboriosam
            non dolore in doloremque doloribus! Quisquam animi iusto similique? Eos dolores quia
            eveniet, ut facilis delectus repudiandae consectetur nihil recusandae suscipit
            sapiente ducimus illum. Id sunt ullam voluptas in.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam vero harum vitae!
            Aperiam quidem, qui veniam amet fuga inventore facere consectetur excepturi? Voluptate
            suscipit dolore, deserunt sapiente facere aperiam?
          </p>
        </section>
        <section className="bg-card rounded-md w-full flex flex-col gap-3 px-8 py-6">
          <h1 className="text-2xl">Profesor</h1>
          <p>
            ¡Hola! Soy {data.teacher.name}, y seré tu instructor en este curso. 
            Estoy aquí para guiarte y apoyarte a lo largo de tu viaje de aprendizaje.
            Puedes contactarme si tienes alguna duda o necesitas asistencia adicional:
            Teléfono: {data.teacher.phone_number}
            Email: {data.teacher.email}
            Estoy emocionado de empezar este viaje contigo y espero que disfrutes y aprendas
            mucho en este curso.
          </p>
        </section>
      </div>
      <div className="md:col-span-3 w-full">
        <RelatedCourses />
      </div>
    </main>
  );
}
