/* eslint-disable @next/next/no-img-element */

'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Upload from '@/components/icons/complements/Upload';
import Back from '@/components/icons/complements/Back';

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
    setPreview(null); // Limpiar la vista previa si no hay imagen

    return () => {
      setPreview(null);
    };
  }, [image]);

  const handleDelete = () => {
    setImage(null);
    setPreview(null);
  };

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
    <div className="flex w-full md:px-60 md:py-20 px-6 my-10 md:my-2">
      <form className="flex w-full md:flex-row flex-col bg-card/30 p-4 border border-gray-500/40 rounded-xl" onSubmit={handleSubmit}>
        <a href="./" className="absolute justify-start mb-4">
          {' '}
          <Back />
          {' '}
        </a>
        <div className="flex md:h-screen justify-center items-center flex-col w-full md:w-7/12 space-y-4 ">
          <p className="md:text-4xl text-3xl font-bold text-primary"> ¡Bienvenido! </p>
          <p className="md:text-3xl text-base font-bold "> Agrega el Curso </p>
          <div className="flex flex-col w-full items-center justify-center space-y-2 p-4">
            <label className="text-primary font-bold md:text-xl text-base md:my-4 my-2"> Nombre: </label>
            <input placeholder="Ingrese el nombre... " className="md:text-base md:w-96 w-5/6 p-2 text-sm rounded-md bg-card shadow-lg" type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="flex flex-col w-full items-center justify-center space-y-2 p-4">
            <label className="text-primary font-bold md:text-xl text-base md:my-4 my-2"> Descripcion: </label>
            <textarea placeholder="Ingrese la descripcion... " className="md:text-sm text-xs md:w-96 w-5/6 p-4 rounded-md bg-card shadow-lg h-32" onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>
          <div className="flex justify-center mx-auto my-5">
            <Button onChange={handleDelete} className="md:p-6 p-2 font-bold md:text-base text-xs my-4"> Realizar Cambios </Button>
          </div>
        </div>
        <div className="flex w-full h-72 md:h-screen md:w-5/12 justify-center items-center flex-col">
          <div className="flex md:h-2/5 md:w-3/5 h-3/5 w-3/5 bg-card md:my-4 my-2 rounded-md">
            {preview && (
            <div className="relative">
              <img src={preview} alt="Preview" className="object-contain p-8 mx-auto w-full h-full rounded-md" />
              <Button onClick={handleDelete} className="md:text-sm text-xs md:left-6 left-2 absolute bottom-1 md:bottom-4 bg-red-600 hover:bg-red-400 px-1 md:py-2 md:px-4 rounded-md shadow-md"> Eliminar Imagen </Button>
            </div>
            )}
          </div>
          <span className="my-6">
            <label className="cursor-pointer md:text-base text-xs font-bold bg-card md:p-4 p-2 rounded-md flex items-center">
              <Upload />
              {' '}
              Subir Imagen
              <input
                style={{ display: 'none' }}
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
            </label>
          </span>
        </div>

      </form>
    </div>
  );
}
