'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      name,
      description,
    };

    fetch('/api/profesor/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('No se pudo agregar el curso');
        }
        router.push('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 ">Agregar Curso</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-lg font-medium mb-2">Nombre del Curso:</label>
          <input
            type="text"
            placeholder="Ingrese el nombre"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Descripción:</label>
          <textarea
            placeholder="Ingresar Descripción"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Imagen:</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              const file = e.target.files;

              if (!file) {
                return;
              }
              setImage(file[0]);
            }}
          />
        </div>
        <div>
          <Button type="submit">
            Agregar
          </Button>
        </div>
      </form>
    </div>
  );
}