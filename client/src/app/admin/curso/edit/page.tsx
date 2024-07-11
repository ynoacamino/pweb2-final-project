'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function EditCourse({ params }: { params: { id: string } }) {
  const [course, setCourse] = useState<any>(null);
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

  //if (!course) return <p>Loading...</p>;

  return (
    <div className="flex flex-row w-full p-40">
        <form action="" className="flex w-full " onSubmit={handleSubmit}>
            <div className='flex bg-primary h-screen w-5/12 justify-center items-center flex-col '>
                  <div className='flex border-2 h-2/5 w-3/5 bg-card my-8 rounded-md'>
                    {preview && (
                      <img src={preview} alt="Preview" className="p-8 mx-auto"/>
                    )}
                  </div>
              <input
                className='border-2 border-black'
                type="file"
                name="image"
                onChange={(e) => {
                  const file = e.target.files;
                  if (!file) {
                    return;
                  }
                  setImage(file[0]);
                }}/>
            </div>
            <div className='flex h-screen justify-center items-center flex-col w-7/12 space-y-4 '>
              <p className='text-4xl font-bold text-primary'> ¡Bienvenido! </p>
              <p className='text-3xl font-bold '> Realiza los cambios </p>
             <div className='flex flex-col w-full items-center justify-center my-4 space-y-2 p-4'>
                <label className='text-primary font-bold text-xl  my-4'> Nombre: </label>
                <input placeholder='Ingrese el nombre... ' className='w-96 p-2 rounded-md bg-card shadow-lg' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
             </div>
             <div className='flex flex-col w-full items-center justify-center my-4 space-y-2 p-4'>
                <label className='text-primary font-bold text-xl my-4' htmlFor=""> Descripcion: </label>
                <textarea placeholder='Ingrese la descripcion... ' className='text-xs w-96 p-4 rounded-md bg-card shadow-lg h-32' onChange={(e) => setDescription(e.target.value)} value={description}/>
             </div>
              <Button className='font-bold p-6'> Realizar Cambios </Button>
            </div>
        </form>
    </div>
  );
}