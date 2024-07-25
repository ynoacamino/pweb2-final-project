/* eslint-disable jsx-a11y/control-has-associated-label */

'use client';

import { useAuth } from '@/components/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEventHandler, useState } from 'react';
import Back from '@/components/icons/complements/Back';

export default function SignUp() {
  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handlePasswordChange = (e: any) => {
    const { name, value } = e.target;
    setPasswords((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const auth = useAuth();

  const handleSignUp:FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (passwords.password !== passwords.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      phone_number: formData.get('phone_number'),
      email: formData.get('email'),
      password: formData.get('password'),
      image_url: `https://api.dicebear.com/7.x/pixel-art/svg?seed=$${formData.get('email')}`,
    };

    auth.registerTeacher({
      email: data.email as string,
      password: data.password as string,
      name: data.name as string,
      phone_number: data.phone_number as string,
      image_url: data.image_url as string,
    });
  };

  return (
    <div className="flex w-full flex-1 justify-center items-center my-4">
      <form className="grid gap-4 space-y-3 px-14 py-8 bg-card rounded-md border-transparent" onSubmit={handleSignUp}>
        <a href="./" className="w-full">
          <Back />
        </a>
        <h1 className=" md:px-12 text-primary text-4xl font-bold text-center">
          ¡Inscribete!
        </h1>
        <p className="font-bold text-center text-base "> Unete a nuestra familia </p>
        <div className="md:space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input type="text" id="name" name="name" />
        </div>
        <div className="md:space-y-2">
          <Label htmlFor="tel">Numero telefonico</Label>
          <Input type="tel" id="tel" name="phone_number" />
        </div>
        <div className="md:space-y-2">
          <Label htmlFor="email">Correo electronico</Label>
          <Input type="email" id="email" name="email" />
        </div>
        <div className="md:space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            className={error ? 'border-red-600 border-2' : ''}
          />
        </div>
        <div className="md:space-y-2">
          <Label htmlFor="password">Confirmar Contraseña</Label>
          <Input
            type="password"
            id="password"
            name="confirmPassword"
            onChange={handlePasswordChange}
            className={error ? 'border-red-600 border-2' : ''}
          />
        </div>
        {error
          && (
          <div className="bg-red-500 text-white w-full rounded-md">
            <p className="text-center text-sm p-1">
              {' '}
              {error}
              {' '}
            </p>
          </div>
          )}
        <div className="w-full flex justify-center">
          <Button className="mt-3" type="submit">Registrarse</Button>
        </div>
      </form>
    </div>
  );
}
