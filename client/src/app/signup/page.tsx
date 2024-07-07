'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { signIn } from 'next-auth/react';
import { FormEventHandler } from 'react';

export default function SignUp() {
  const { toast } = useToast();

  const handleSignUp:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      phone_number: formData.get('phone_number'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          throw new Error(res.error);
        } else {
          signIn('credentials', {
            email: res.user.email,
            password: res.user.password,
            callbackUrl: '/',
            redirect: false,
          });
        }
      })
      .catch(() => {
        // toast.error('Error al registrarse');
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Error al registrarse',
        });
      });
  };

  return (
    <div className="flex w-full flex-1 justify-center items-center">
      <form className="grid gap-4" onSubmit={handleSignUp}>
        <h1 className="text-primary text-5xl font-bold text-center">
          Registrate
        </h1>
        <div>
          <Label htmlFor="name">Nombre</Label>
          <Input type="text" id="name" name="name" />
        </div>
        <div>
          <Label htmlFor="tel">Numero telefonico</Label>
          <Input type="tel" id="tel" name="phone_number" />
        </div>
        <div>
          <Label htmlFor="email">Correo electronico</Label>
          <Input type="email" id="email" name="email" />
        </div>
        <div>
          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" id="password" name="password" />
        </div>
        <Button type="submit">Registrarse</Button>
      </form>
    </div>
  );
}
