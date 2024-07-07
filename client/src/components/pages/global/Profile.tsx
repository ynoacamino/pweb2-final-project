/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { signOut } from 'next-auth/react';
import BrandTitle from './BrandTitle';

export default function Profile(
  { name, image, email }:
  { name: string, image: string, email: string },
) {
  const wordInName = name?.split(' ');

  return (
    <Sheet key={crypto.randomUUID()}>
      <SheetTrigger asChild>
        <Button>
          Perfil
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <BrandTitle />
          </SheetTitle>
          <SheetTitle>
            <h2 className="text-3xl font-bold flex items-center">
              <span className="text-primary">
                Hi,
                {' '}
              </span>
              <span>
                {`${wordInName[0]} ${wordInName[1]}` || email}
              </span>
              <img
                src={image}
                width={50}
                height={50}
                className="rounded-full ml-6"
              />
            </h2>
          </SheetTitle>
          <SheetDescription>
            Un gusto tenerte de vuelta, recuerda que puedes seguir aprendiendo con nosotros.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">

          <div className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Mis cursos
          </div>
          <div className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Explorar
          </div>
          <div className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Facturacion
          </div>
          <div className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Mi perfil
          </div>
          <Button onClick={() => signOut()}>Cerrar sesion</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
