import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/authOptions';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return Response.json({ res: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();

  const profesores = await fetch('http://localhost:8000/academia/api/teacher/').then((res) => res.json());

  const profesor = profesores.find((profesor) => profesor.email === session.user?.email);

  if (!profesor) {
    return Response.json({ res: 'Unauthorized' }, { status: 401 });
  }

  const bodyResponse = {
    ...body,
    teacher: profesor.teacher_id,
  };

  fetch('http://localhost:8000/academia/api/curso/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyResponse),
  })
    .catch((err) => {
      console.error(err);
      return Response.json({ res: 'Error' }, { status: 500 });
    });

  return Response.json({ res: 'Curso agregado' }, { status: 200 });
}