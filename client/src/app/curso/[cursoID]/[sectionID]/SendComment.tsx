import { useAuth } from '@/components/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function SendComment({ cursoID }: { cursoID: string }) {
  const [comment, setComment] = useState('');

  const { user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      user: user.user_id,
      comment,
      curso: Number(cursoID),
    };

    fetch('http://localhost:8000/academia/api/review/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('user-login-token')}`,
      },
      body: JSON.stringify(body),
    }).then(() => window.location.reload());
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Textarea
        placeholder="Escribe un comentario"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <div className="w-full flex items-center justify-end">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
