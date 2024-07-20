'use client';

import Upload from '@/components/icons/complements/Upload';
import { useAuth } from '@/components/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageEdit({ params }: { params: { cursoId: string; seccionId: string } }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState<File | null>(null);

  const [urlVideo, setUrlVideo] = useState<{ url: string, loading: boolean }>({ url: '', loading: false });

  const router = useRouter();

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

  // auth.isTeacher();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Curso:</h1>
      <h1 className="text-2xl font-bold mb-4">Editando Sección</h1>
      <form onSubmit={handleSubmit} method="POST" className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Nombre de la Sección:</label>
          <input
            type="text"
            placeholder="Ingrese el nombre"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
                  {' '}
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
        <div>
          <label className="block text-lg font-medium mb-2">Ingrese la Descripción:</label>
          <textarea
            placeholder="Ingresar Descripción"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex w-full p-2">
          <div className="min-w-96 mx-auto p-3 rounded-md">
            <Button type="submit" className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6">
              Realizar cambios
            </Button>
            <Button className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6 ">
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
