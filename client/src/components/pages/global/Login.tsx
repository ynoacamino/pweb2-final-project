/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import BrandTitle from './BrandTitle';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  };

  return (
    <Sheet key={1}>
      <SheetTrigger asChild>
        <Button>
          Login
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <BrandTitle />
          </SheetTitle>
          <SheetTitle>
            <h2 className="text-3xl font-bold">
              Registrate
            </h2>
          </SheetTitle>
          <SheetDescription>
            Ingresar o crear una cuenta con:
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div aria-label="button" className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Google
          </div>
          <div aria-label="button" className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Github
          </div>
          <div className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Google
          </div>
          <div className="flex flex-col gap-4">
            <span className="w-full text-muted-foreground text-sm">O usa tu correo electronico:</span>
            <form className="grid gap-4" onSubmit={handleLogin}>
              <div>
                <Label htmlFor="email">Correo electronico</Label>
                <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button type="submit">Iniciar Sesion</Button>
            </form>
            <span className="w-full text-muted-foreground text-sm">
              Registrate
              {' '}
              <Link href="/signup">
                Aqui
              </Link>
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
