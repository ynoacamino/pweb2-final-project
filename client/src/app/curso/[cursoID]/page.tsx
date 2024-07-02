import Description from '@/components/pages/course/Description';
import RelatedCourses from '@/components/pages/course/RelatedCourses';
import Sections from '@/components/pages/course/Sections';
import Title from '@/components/pages/course/Title';

const getData = async ({ id }: { id: string }) => {
  const curso = {
    id,
    name: 'Curso de React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nulla quae, adipisci nihil autem expedita earum rerum id. Nisi delectus ad explicabo aliquid, architecto dicta soluta, maiores molestiae adipisci voluptates officiis incidunt aut laborum eos reprehenderit, qui optio. Tenetur ea quidem vitae eius sunt dolore voluptas laborum pariatur deleniti, minus neque, libero sed quae quis repellat doloremque voluptatem ratione officia magnam at eaque explicabo quia quas? Possimus explicabo modi quisquam recusandae.',
    teacher: 'Juanito Perez',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
    sessions: [
      {
        id: '1',
        name: 'Que es React',
        url: '/curso/id/sesion/1',
      },
      {
        id: '2',
        name: 'Componentes',
        url: '/curso/id/sesion/2',
      },
      {
        id: '3',
        name: 'Hooks',
        url: '/curso/id/sesion/3',
      },
      {
        id: '4',
        name: 'Context',
        url: '/curso/id/sesion/4',
      },
      {
        id: '5',
        name: 'Redux',
        url: '/curso/id/sesion/5',
      },
    ],
  };

  return curso;
};

export default async function CursoPage({ params }: { params: { cursoID: string } }) {
  const data = await getData({ id: params.cursoID });

  return (
    <main className="w-full grid md:grid-cols-3 max-w-6xl mt-14 mb-20 gap-y-10">
      <div className="md:col-span-2 flex flex-col w-full px-4 gap-10">
        <Title image={data.image} name={data.name} />
        <Description description={data.description} />
        <Sections sections={data.sessions} />
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat corrupti laboriosam
            non dolore in doloremque doloribus! Quisquam animi iusto similique? Eos dolores quia
            eveniet, ut facilis delectus repudiandae consectetur nihil recusandae suscipit
            sapiente ducimus illum. Id sunt ullam voluptas in.
          </p>
        </section>
      </div>
      <div className="md:col-span-3 w-full">
        <RelatedCourses />
      </div>
    </main>
  );
}
