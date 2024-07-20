'use client';

import Upload from '@/components/icons/complements/Upload';
import { useAuth } from '@/components/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Back from '@/components/icons/complements/Back';
import PdfAdd from '@/components/icons/complements/PdfAdd';
import PdfCreate from '@/components/icons/complements/PdfCreate';
import PdfEliminated from '@/components/icons/complements/PdfEliminated';

export default function PageEdit({ params }: { params: { cursoId: string; seccionId: string } }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState<File | null>(null);

  const [urlVideo, setUrlVideo] = useState<{ url: string, loading: boolean }>({ url: '', loading: false });

  const router = useRouter();

  const [pdfs, setPdfs] = useState<File[]>([]);

  const auth = useAuth();

  // const data = useFetch(`http://localhost:8000/academia/api/section/${params.seccionId}/`);

  useEffect(() => {
    if (video) {
      setUrlVideo({ url: '', loading: true });

      const form = new FormData();
      form.append('file', video);

      fetch('http://localhost:8000/media_manager/upload/', {
        method: 'POST',
        body: form,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrlVideo({ url: data.url, loading: false });
        });
    }
  }, [video]);

  useEffect(() => {
    fetch(`http://localhost:8000/academia/api/section/${params.seccionId}/`, {
      headers: {
        Authorization: `Token ${localStorage.getItem('user-login-token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
        setUrlVideo({ url: data.video_url, loading: false });
      });
  }, [params.seccionId]);

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      name,
      description,
      curso: Number(params.cursoId),
      video_url: urlVideo.url,
    };

    console.log(body);

    fetch(`http://localhost:8000/academia/api/section/${params.seccionId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('user-login-token')}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.section_id) {
          router.back();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleAddPdf = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setPdfs([...pdfs, ...Array.from(event.target.files)]);
    }
  };

  const handleRemovePdf = (index: number) => {
    setPdfs(pdfs.filter((_, i) => i !== index));
  };

  // auth.isTeacher();

  return (
    <div className="flex w-full md:px-60 md:py-20 px-6 my-10 md:my-2">
      <form onSubmit={handleSubmit} method="POST" className="flex w-full md:flex-row flex-col">
        <a href="../" className="absolute justify-start mb-4">
          {' '}
          <Back />
          {' '}
        </a>
        <div className="flex md:h-screen justify-center items-center flex-col w-full md:w-7/12 space-y-4 ">
          <p className="md:text-4xl text-3xl font-bold text-primary"> ¡Bienvenido! </p>
          <p className="md:text-3xl text-base font-bold "> Modificar la Seccion </p>
          <div className="flex flex-col w-full items-center justify-center space-y-2 p-4">
            <label className="text-primary font-bold md:text-xl text-base md:my-4 my-2"> Nombre: </label>
            <input
              type="text"
              placeholder="Ingrese el nombre"
              className="md:text-base md:w-96 w-5/6 p-2 text-sm rounded-md bg-card shadow-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full items-center justify-center space-y-2 p-4">
            <label className="text-primary font-bold md:text-xl text-base md:my-4 my-2"> Descripcion: </label>
            <textarea
              placeholder="Ingresar Descripción"
              className="md:text-sm text-xs md:w-96 w-5/6 p-4 rounded-md bg-card shadow-lg h-32"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full items-center justify-center space-y-2 p-4 ">
              <label className="text-primary font-bold md:text-xl text-base md:my-4 my-2"> PDF's: </label>
              <div className="flex flex-wrap gap-4 mt-4">
                {pdfs.map((pdf, index) => (
                <div key={index} className="relative flex items-center justify-center w-24 h-24 p-2 bg-white rounded-lg mx-auto">
                  <div className="text-red-600 w-full h-full">
                    <PdfCreate />
                  </div>
                  <button
                    onClick={() => handleRemovePdf(index)}
                    className="absolute top-0 right-0 p-1 mr-1 mt-1 bg-red-500 rounded-full text-white">
                    <PdfEliminated /> 
                  </button>
                </div>
                ))}
                <label className="flex items-center justify-center w-24 h-24 p-2 bg-primary rounded-lg cursor-pointer mx-auto">
                  <PdfAdd />
                  <input type="file" accept="application/pdf" onChange={handleAddPdf} className="hidden" />
                </label>
              </div>
          </div>
          <div className="flex justify-center mx-auto my-5">
            <Button disabled={urlVideo.loading} type="submit" className="md:p-6 p-2 font-bold md:text-base text-xs my-4"> Realizar Cambios </Button>
          </div>
        </div>

        <div className="flex w-full h-72 md:h-screen md:w-5/12 justify-center items-center flex-col">
          <div className="flex md:h-2/5 md:w-3/5 h-3/5 w-3/5 bg-card md:my-4 my-2 rounded-md">
            {urlVideo.url && (
              <div className="relative">
                <video src={urlVideo.url} className="object-contain p-8 mx-auto w-full h-4/5 rounded-md" controls>
                  <track kind="captions" src="captions.vtt" label="English" />
                </video>
                <Button
                  onClick={() => {
                    setUrlVideo({ url: '', loading: false });
                    setVideo(null);
                  }}
                  className="md:text-sm text-xs md:left-6 left-2 absolute bottom-1 md:bottom-4 bg-red-600 hover:bg-red-400 px-1 md:py-2 md:px-4 rounded-md shadow-md"
                >
                  Eliminar Video
                </Button>
              </div>
            )}
          </div>
          <span className="my-6">
            <label className="cursor-pointer md:text-base text-xs font-bold bg-card md:p-4 p-2 rounded-md flex items-center">
              <Upload />
              {' '}
              Subir Video
              <input
                style={{ display: 'none' }}
                type="file"
                name="image"
                accept="image/*, video/*"
                onChange={(e) => {
                  const file = e.target.files;
                  if (!file) {
                    return;
                  }
                  setVideo(file[0]);
                }}
              />
            </label>
          </span>
        </div>
      </form>
    </div>
  );
}
