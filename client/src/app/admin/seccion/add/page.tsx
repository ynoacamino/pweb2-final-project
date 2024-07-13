'use client';

import { Button } from "@/components/ui/button"
import { useRouter} from 'next/navigation';
import { useState, useEffect } from 'react';
import Upload from "@/components/icons/complements/Upload";
import Back from "@/components/icons/complements/Back";

export default function PageAdd(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState<File | null>(null);

    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (video) {
        const objectURL = URL.createObjectURL(video);
        setPreview(objectURL);

        return () => {
            URL.revokeObjectURL(objectURL);
        };
        }
    }, [video]);
    const handleDelete = () => {
      setVideo(null);
      setPreview(null);
    }

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const body = {
            name,
            description,
        };
    
        fetch('', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('No se pudo agregar la seccion');
            }
            router.push('/');
            })
        .catch((err) => console.error(err));
    };

    return (
      <div className="flex w-full md:px-60 md:py-20 px-6 my-10 md:my-2">
      <form action="POST" className="flex w-full md:flex-row flex-col" onSubmit={handleSubmit}>
        <a href="./" className='absolute justify-start mb-4'> <Back/> </a>
          <div className='flex md:h-screen justify-center items-center flex-col w-full md:w-7/12 space-y-4 '>
            <p className='md:text-4xl text-3xl font-bold text-primary'> ¡Bienvenido! </p>
            <p className='md:text-3xl text-base font-bold '> Agrega la Seccion </p>
            <div className='flex flex-col w-full items-center justify-center space-y-2 p-4'>
                <label className='text-primary font-bold md:text-xl text-base md:my-4 my-2'> Nombre: </label>
                <input placeholder='Ingrese el nombre... ' className='md:text-base md:w-96 w-5/6 p-2 text-sm rounded-md bg-card shadow-lg' type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className='flex flex-col w-full items-center justify-center space-y-2 p-4'>
                <label className='text-primary font-bold md:text-xl text-base md:my-4 my-2'> Descripcion: </label>
                <textarea placeholder='Ingrese la descripcion... ' className='md:text-sm text-xs md:w-96 w-5/6 p-4 rounded-md bg-card shadow-lg h-32' onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div className='flex justify-center mx-auto my-5'>
              <Button onChange={handleDelete} className='md:p-6 p-2 font-bold md:text-base text-xs my-4'> Guardar Seccion </Button>
            </div>
          </div>
          <div className='flex bg-primary w-full h-72 md:h-screen md:w-5/12 justify-center items-center flex-col'>
            <div className="flex md:h-2/5 md:w-3/5 h-3/5 w-3/5 bg-card md:my-4 my-2 rounded-md">
              {preview && (
                <div className='relative'>
                  <video src={preview} className="object-contain p-8 mx-auto w-full h-4/5 rounded-md" controls />
                  <Button onClick={handleDelete} className='md:text-sm text-xs md:left-6 left-2 absolute bottom-1 md:bottom-4 bg-red-600 hover:bg-red-400 px-1 md:py-2 md:px-4 rounded-md shadow-md'> Eliminar Video </Button>
                </div>
              )}
            </div>
            <span className='my-6'>
            <label className="cursor-pointer md:text-base text-xs font-bold bg-card md:p-4 p-2 rounded-md flex items-center">
                <Upload />  Subir Video
                <input
                style={{display:'none'}}
                type="file"
                name="image"
                accept="image/*, video/*" 
                onChange={(e) => {
                  const file = e.target.files;
                  if (!file) {
                    return;
                  }
                  setVideo(file[0]);
                }}/>
              </label>
            </span>
          </div>
        </form>
      </div>
    );
}