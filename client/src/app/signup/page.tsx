'use client';

import { useAuth } from '@/components/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEventHandler } from 'react';

export default function SignUp() {
  const auth = useAuth();

  const handleSignUp:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      phone_number: formData.get('phone_number'),
      email: formData.get('email'),
      password: formData.get('password'),
      image_url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=$${formData.get('email')}`,
    };

    auth.register({
      email: data.email as string,
      password: data.password as string,
      name: data.name as string,
      phone_number: data.phone_number as string,
      image_url: data.image_url as string,
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
