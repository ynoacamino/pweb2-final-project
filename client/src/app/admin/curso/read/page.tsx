'use client';

import { useEffect, useState } from 'react';

export default function PageRead() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/academia/api/curso/')
      .then((res) => res.json())
      .then((data) => setCursos(data));
  }, []);

  return (
    <div>
      <h1>Cursos</h1>
      <p>Lista de cursos</p>

      <div className="flex w-full max-w-6xl gap-8">

        {
        cursos.map((curso: any) => (
          <div key={crypto.randomUUID()} className="bg-card p-4 rounded-md">
            <h2>{curso.name}</h2>
            {/* <h3>{curso.teacher}</h3> */}
            <p>{curso.description}</p>

          </div>
        ))
      }
      </div>
    </div>
  );
}
