/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import {
  useContext, createContext,
  useState,
  useEffect,
} from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const userContext = createContext<any>({});

export const useAuth = () => {
  const contex = useContext(userContext);
  if (!useContext) throw new Error('contect not found');
  return contex;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('user-login-token');
    if (token) {
      fetch('http://localhost:8000/academia/api/getUser/', {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const isLogged = () => !!user;

  const login = async ({
    email, password,
  } :{
    email: string, password: string
  }) => {
    try {
      const tk = await fetch('http://localhost:8000/academia/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, password,
        }),
      }).then((res) => res.json());
      if (tk?.token) {
        localStorage.setItem('user-login-token', tk.token);
        window.location.replace('/');
      }
    } catch (err) {
      // toast.error('Usuario o contraseña erronea');
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Usuario o contraseña erronea',
      });
    }
  };
  const register = async ({
    email, password, name, phone_number, image_url,
  } :{
    email: string, password: string, name: string, phone_number: string, image_url: string
  }) => {
    try {
      const tk = await fetch('http://localhost:8000/academia/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, password, name, phone_number, image_url,
        }),
      }).then((res) => res.json());
      if (tk?.token) {
        localStorage.setItem('user-login-token', tk.token);
        window.location.replace('/');
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Error al registrar el usuario',
      });
    }
  };

  const registerTeacher = async ({
    email, password, name, phone_number, image_url,
  } :{
    email: string, password: string, name: string, phone_number: string, image_url: string
  }) => {
    try {
      const tk = await fetch('http://localhost:8000/academia/api/registerTeacher/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, password, name, phone_number, image_url,
        }),
      }).then((res) => res.json());
      if (tk?.token) {
        localStorage.setItem('user-login-token', tk.token);
        window.location.replace('/');
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Error al registrar el usuario',
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('user-login-token');
    setUser(null);
    window.location.reload();
  };

  const isTeacher = () => {
    if (!user || user.rol !== 'teacher') {
      router.push('/');
    }
  };

  const isStudent = () => {
    if (!user || user.rol !== 'student') {
      router.push('/');
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        loading,
        isLogged,
        login,
        logout,
        register,
        registerTeacher,
        isTeacher,
        isStudent,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
