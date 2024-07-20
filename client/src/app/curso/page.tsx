'use client';
import { useFetch } from "@/components/pages/fetch/useFetch";
import Back from "@/components/icons/complements/Back";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


export default function myCoursesPage(){
  //Esto fue solo prueba cambiarlo
  const courses = useFetch('http://localhost:8000/academia/api/curso/') as any[];

  return(
    <main className="w-full md:px-96 my-4">
      <a href="./" className="py-4">
        <Back/>
      </a>
      <div className="w-full my-16">
        <h1 className="text-2xl font-bold px-12">
          <span> Sus </span>
          <span className="text-primary"> Cursos: </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-around items-center w-full max-w-4xl">
        {courses.map((value) => (
          <div
            key={crypto.randomUUID()}
            className="bg-card rounded-md py-6 px-14 flex flex-col items-center justify-center gap-4 shadow-md"
          >
            <img
              src="https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png"
              alt="Imagen - Curso"
              width={150}
              height={50}
              className="rounded-t-md aspect-video w-full"
            />
            <span className="w-full p-4 text-xl font-semibold"> {value.name} </span>
            <Link href={`curso/${value.curso_id}`}>
              <Button className="mt-4 bg-primary text-sm font-bold">
                -&gt; Ver más
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
