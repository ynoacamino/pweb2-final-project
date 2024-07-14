'use client';

import { Button } from '@/components/ui/button';
import { useFetch } from '@/components/pages/fetch/useFetch';
import { useAuth } from '@/components/providers/AuthProvider';
import Link from 'next/link';

export default function PageRead({ params }: { params: { cursoId: string } }) {
  // const { loading, isTeacher } = useAuth();
  const { loading } = useAuth();

  const data = useFetch(`http://localhost:8000/academia/api/curso/${params.cursoId}/`) as any;

  if (loading) {
    return <div>Loading...</div>;
  }

  // isTeacher();

  console.log(data);

  return (
    <div className="w-full p-16">
      <div className="w-full p-4 shadow rounded-lg mb-4">
        <div className="mb-2">
          <p className="font-semibold text-4xl p-2">
            Curso:
            {data.name}
          </p>
          <p>Lista de secciones:</p>
        </div>
        <div className="flex justify-end">
          <Button className="mt-2 px-4 py-2 rounded">
            <a href="../curso/add">Agregar Sección</a>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {data.sections?.map((section: any) => (
          <div
            key={crypto.randomUUID()}
            className="mx-8 flex justify-between rounded-lg shadow-lg bg-background p-6"
          >
            <div className="max-w-6xl">
              <h2 className="text-xl font-bold">{section.name}</h2>
              <p>{section.description}</p>
            </div>
            <div className="flex items-center border-black p-4">
              <Link
                className="mx-4 py-2 rounded bg-red-500  hover:bg-red-600 px-4"
                href={`/admin/seccion/${params.cursoId}/${section.section_id}/delete`}
              >
                Eliminar
              </Link>
              <Link
                className="mx-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 px-4 "
                href={`/admin/seccion/${params.cursoId}/${section.section_id}/edit`}
              >
                Modificar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
