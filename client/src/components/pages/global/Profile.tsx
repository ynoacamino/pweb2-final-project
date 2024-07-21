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
import { useAuth } from '@/components/providers/AuthProvider';
import Link from 'next/link';
import BrandTitle from './BrandTitle';

export default function Profile(
  { name, image, email }:
  { name: string, image: string, email: string },
) {
  const wordInName = name?.split(' ');

  const { logout } = useAuth();

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
            <span className="text-3xl font-bold flex items-center ml-2">
              <span className="text-primary">
                Hi,
                {' '}
              </span>
              <span className="ml-2">
                {` ${wordInName[0]} ${wordInName[1] || ''}` || email}
              </span>
              <img
                src={image}
                width={50}
                height={50}
                className="rounded-full ml-6"
              />
            </span>
          </SheetTitle>
          <SheetDescription>
            Un gusto tenerte de vuelta, recuerda que puedes seguir aprendiendo con nosotros.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">

          <div className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Mis cursos
          </div>
          <Link href="/cursos" className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Explorar
          </Link>
          <Link href="/facturacion" className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Facturacion
          </Link>
          <Link href="/me" className="w-full rounded-md py-4 px-6 text-center text-xl font-semibold border border-input hover:bg-accent transition-colors duration-75 hover:cursor-pointer">
            Mi perfil
          </Link>
          <Button onClick={() => logout()}>Cerrar sesion</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
