'use client';

import { useAuth } from '@/components/providers/AuthProvider';
import Login from './Login';
import Profile from './Profile';

export default function Access() {
  const { user } = useAuth();

  if (user) {
    return (
      <Profile
        name={user?.name || ''}
        email={user?.email || ''}
        image={user?.image_url || ''}
      />
    );
  }

  return (
    <Login />
  );
}
