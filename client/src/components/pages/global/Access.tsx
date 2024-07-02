import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth';
import Login from './Login';
import Profile from './Profile';

export default async function Access() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <Login />
    );
  }

  return (
    <Profile
      name={session.user?.name || ''}
      email={session.user?.email || ''}
      image={session.user?.image || ''}
    />
  );
}
