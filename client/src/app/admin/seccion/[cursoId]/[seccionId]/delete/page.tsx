'use client';

import { useFetch } from '@/components/pages/fetch/useFetch';
import { useAuth } from '@/components/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function PageDelete({ params }: { params: { seccionId: string } }) {
  const router = useRouter();

  const auth = useAuth();

  const data = useFetch(`http://localhost:8000/academia/api/section/${params.seccionId}/`) as any;

  if (auth.loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = () => {
    fetch(`http://localhost:8000/academia/api/section/${params.seccionId}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${localStorage.getItem('user-login-token')}`,
      },
    }).then((res) => {
      if (res.ok) {
        router.back();
      }
    });
  };

  auth.isTeacher();

  return (
    <div className="w-full my-6 space-y-2 md:space-y-4">
      <div className="w-full flex justify-center items-center my-8">
        <span className="text-center max-w-md before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block p-5">
          <span className="justify-center relative text-2xl p-1 font-bold sm:text-4xl sm:p-4">
            Curso:
            {' '}
            {data.name}
          </span>
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-2xl border-2 m-4 bg-transparent">
          <video
            controls
            className="mx-auto rounded-md shadow-lg"
            src={data.video_url}
            width={640}
            height={480}
          >
            <track kind="captions" src="captions.vtt" label="English" />
          </video>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-8">
        <div className="max-w-4xl p-8 rounded-md bg-card">
          <p className="text-center md:text-lg text-sm font-medium">
            {
              data.description
            }
          </p>
        </div>
      </div>
      <div className="flex w-full p-2">
        <div className="min-w-96 mx-auto p-3 rounded-md">
          <Button onClick={handleDelete} className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6">
            Eliminar
          </Button>
          <Button className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6" onClick={() => router.back()}>
            <a href="../seccion/read"> Cancelar </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
