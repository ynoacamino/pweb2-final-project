'use client';

import { useEffect, useState } from 'react';
import { useFetch } from '../../components/pages/fetch/useFetch';

export default function PageRead() {
  const courses = useFetch('http://localhost:8000/academia/api/curso/');

  return (
    <div>
      <h1>Sus cursos prof. {courses.teacher.name} </h1>

      <div className="flex w-full max-w-6xl gap-8">

        {
        courses.map((curso: any) => (
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
