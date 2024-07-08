'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const objectURL = URL.createObjectURL(image);
      setPreview(objectURL);

      return () => {
        URL.revokeObjectURL(objectURL);
      };
    }
  }, [image]);

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
    <div className="flex flex-col gap-4 my-8">
      <div className='bg-card p-10'>
        <Button
          className='bg-primary text-sm font-bold px-2'
          onClick={() => {router.push('./read')}}
        >
          &lt; Atras
        </Button>   
        <h1 className='w-full flex flex-col items-center justify-center font-bold my-8'>  
          <span className='text-4xl text-primary'> ¡ Bienvenido ! </span>
          <span className='text-2xl'> Agrega el Curso </span>
        </h1>
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label className='font-bold p-3'> Nombre: </label>
          <input className='p-2 text-xs mx-4 rounded-sm' type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
          <label className='font-bold p-3'> Descripcion: </label>
          <textarea className='p-2 text-xs mx-4 rounded-sm h-28' name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
          {preview && (
              <div className='w-full flex items-center justify-center py-6'>
                <img src={preview} alt="Preview" className="max-w-64 mx-auto" />
              </div>
          )}
          <div className='w-full flex items-center justify-center p-4'>
            <input
              className='mx-auto border-2 text-sm'
              type="file"
              name="image"
              accept="image/*"  
              id='photo'
              onChange={(e) => {
                const file = e.target.files;
                if (!file) {
                  return;
                }
                setImage(file[0]);
              }}
            />
          </div>
          <div className='w-full flex items-center justify-center p-6'>
            <Button className='mx-auto font-bold' type="submit">Agregar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}