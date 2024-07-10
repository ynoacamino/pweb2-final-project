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
    <div className="flex flex-row w-full ">
      <div className='bg-primary flex h- w-6/12 justify-center items-center flex-col'>
      <input
        className='mx-auto border-2 text-sm'
        type="file"
        name="image"
        accept="image/*"  
        onChange={(e) => {
          const file = e.target.files;
          if (!file) {
            return;
          }
          setImage(file[0]);
        }}/>
      </div>

      <div className="flex h-screen w-6/12 justify-center items-center flex-col ">
        <form action="" className="flex flex-col">
            <div className="flex flex-col mt-8 w-full md:w-auto md:absolute md:right-11 md:top-20 items-center text-center justify-center">
              <h2 className="text-2xl md:text-3xl md:w-[637px] text-primary">Bienvenidos</h2>
              <h2 className="text-xl md:text-2xl mt-2 md:w-[637px]">Modificar Curso</h2>
            </div>
            <div className="flex flex-col mt-8 w-full md:w-auto md:absolute md:right-11 md:top-40">
              <label htmlFor="name" className="my-4 font-bold text-lg">Nombre:</label>
              <textarea id="name" className="p-2 text-xs rounded-sm h-28 w-full md:w-[637px]" name="name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className=" flex flex-col mt-8 w-full md:w-auto md:absolute md:right-11 md:top-[calc(50%_+_-109px_+_87px)]">
              <label htmlFor="description" className="my-4 font-bold text-lg">Descripción:</label>
              <textarea id="description" className="p-2 text-xs rounded-sm h-28 w-full md:w-[637px]" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <Button className="mt-8 md:absolute md:bottom-[75px] md:right-56 h-16 w-80" type="submit">Modificar</Button>
        </form>
      </div>
    </div>
  );
}