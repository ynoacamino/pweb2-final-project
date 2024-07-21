'use client';

import Description from '@/components/pages/course/Description';
import Title from '@/components/pages/course/Title';

import Sections from '@/components/pages/course/Sections';
import { useFetch } from '../../../components/pages/fetch/useFetch';
import Coment from './[sectionID]/Coment';
import SendComment from './[sectionID]/SendComment';

export default function CursoPage({ params }: { params: { cursoID: string } }) {
  const { cursoID } = params;
  const data = useFetch(`http://localhost:8000/academia/api/curso/${cursoID}/`) as any;

  console.log('data', data);

  return (
    <>
      <main className="w-full grid md:grid-cols-3 max-w-6xl mt-14 mb-20 gap-y-10">
        <div className="md:col-span-2 flex flex-col w-full px-4 gap-10">
          <Title image={data.image_url} name={data.name} />
          <Description description={data.description} />
          <Sections cursoID={cursoID} />
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
              ¡Hola! Soy
              {' '}
              {data?.teacher?.name}
              , y seré tu instructor en este curso.
              Estoy aquí para guiarte y apoyarte a lo largo de tu viaje de aprendizaje.
              Puedes contactarme si tienes alguna duda o necesitas asistencia adicional:
              Teléfono:
              {' '}
              {data?.teacher?.phone_number}
              Email:
              {' '}
              {data?.teacher?.email}

              Estoy emocionado de empezar este viaje contigo y espero que disfrutes y aprendas
              mucho en este curso.
            </p>
          </section>
        </div>
      </main>
      <div className="w-full max-w-6xl flex flex-col gap-10 mb-32">
        <h1 className="text-3xl font-semibold">Comentarios</h1>
        <SendComment cursoID={cursoID} />
        {
        data?.reviews?.map((comment: any) => (
          <Coment
            key={crypto.randomUUID()}
            name={comment.user.name}
            comment={comment.comment}
            imageUrl={comment.user.image_url}
            date={comment.updated_at}
          />
        ))
      }
      </div>
    </>
  );
}
