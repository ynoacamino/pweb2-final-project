'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function EditCourse({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<any>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:8000/academia/api/curso/?{1}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setName(data.name);
        setDescription(data.description);
      });
  }, [1]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      name,
      description,
    };

    fetch(`http://localhost:8000/academia/api/curso/?{1}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo actualizar el curso');
        }
        router.push('/cursos');
      })
      .catch((err) => console.error(err));
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Curso:</h1>
      <h1 className="text-2xl font-bold mb-4">Editando Sección</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium mb-2">Nombre del Curso:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ingrese el nombre"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Descripción del Curso:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ingresar Descripción"
          />
        </div>
        <div className="flex w-full p-2">
          <div className="min-w-96 mx-auto p-3 rounded-md flex justify-center gap-4">
            <Button className="font-bold text-xs p-2 md:text-lg md:p-6 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">
              Guardar Cambios
            </Button>
            <Button className="font-bold text-xs p-2 md:text-lg md:p-6 bg-gray-500 text-white rounded hover:bg-gray-600">
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}