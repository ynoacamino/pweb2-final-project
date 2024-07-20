'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/providers/AuthProvider';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

export default function Facturacion() {
  const { user, isStudent } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Por favor, inicia sesión.</p>
      </div>
    );
  }

  return (
      <Card>
        <CardContent className="w-full max-w-6xl flex flex-col gap-10 my-20 shadow-lg">

          <article className="w-full rounded-md bg-card p-8 flex gap-10 flex-col lg:flex-row items-center">
            <h1 className="text-3xl md:text-5xl font-bold text-center">Precios y Beneficios de los Cursos de Programación</h1>
            <p className="text-lg md:text-xl text-center w-full max-w-lg">Nuestros cursos de programación ofrecen acceso exclusivo a recursos, foros privados y eventos anuales.</p>
          </article>

          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">

            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-3xl font-bold text-primary">Membresía de por vida</h3>
              <p className="text-lg md:text-xl w-full max-w-lg">Acceso ilimitado a todos nuestros cursos y recursos educativos.</p>

              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary">Incluye</h4>
                <div className="h-px flex-auto bg-gray-100"></div>
              </div>

              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg className="w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Acceso a foros privados
                </li>
                <li className="flex gap-x-3">
                  <svg className="w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Recursos exclusivos para miembros
                </li>
                <li className="flex gap-x-3">
                  <svg className="w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Entrada a la conferencia anual
                </li>
                <li className="flex gap-x-3">
                  <svg className="w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Camiseta oficial de miembro
                </li>
              </ul>
            </div>

            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Obten más información de tu plan</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">S/. 140.00</span>
                  </p>
                  <Button className="mt-10">Descargar</Button>
                  <p className="mt-6 text-xs leading-5 text-gray-600">Facturas y recibos disponibles para fácil reembolso de la empresa</p>
                </div>
              </div>
            </div>

          </div>

        </CardContent>
      </Card>
  );
}
