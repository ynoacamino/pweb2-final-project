'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function PageRead() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/academia/api/curso/')
      .then((res) => res.json())
      .then((data) => setCursos(data));
  }, []);

  return (
    <div className="w-full p-16">
      <div className="w-full p-4 shadow rounded-lg mb-4">
        <div className="mb-2">
          <p className="font-semibold text-4xl p-2">Cursos:</p>
          <p>Lista de cursos</p>
        </div>
        <div className="flex justify-end">
          <Button className="mt-2 px-4 py-2 rounded">
            <a href="../curso/add">Agregar Sección</a>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {cursos.map((curso: any) => (
          <div key={curso.id} className="mx-8 flex justify-between rounded-lg shadow-lg bg-white p-6">
            <div className="max-w-6xl">
              <h2 className="text-xl font-bold">{curso.name}</h2>
              <p>{curso.description}</p>
            </div>
            <div className="flex items-center border-black p-4">
              <Button className="mx-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
                <a href="">Eliminar</a>
              </Button>
              <Button className="mx-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600">
                <a href="">Modificar</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
