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
    <div className="flex flex-col gap-4">
      <h1>Agrega cursos</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
        <textarea name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files;

            if (!file) {
              return;
            }
            setImage(file[0]);
          }}
        />
        <Button type="submit">Agregar</Button>
      </form>
    </div>
  );
}
