'use client';

import { useEffect, useState } from 'react';

export default function PageRead() {
  const [cursos, setCursos] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/academia/api/curso/')
      .then((res) => res.json())
      .then((data) => setCursos(data));
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este curso?')) {
      fetch(`http://localhost:8000/academia/api/curso/?1`, {
        method: 'DELETE',
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('No se pudo eliminar el curso');
          }
          // Actualizar la lista de cursos después de eliminar
          setCursos(cursos.filter((curso) => curso.id !== id));
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cursos</h1>
      <p className="mb-4">Lista de cursos</p>

      <div className="flex flex-col gap-6">
        {cursos.map((curso) => (
          <div key={curso.id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">{curso.name}</h2>
            <p className="text-gray-700">{curso.description}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => handleDelete(curso.id)}
                className="bg-yellow-500 text-white hover:bg-yellow-600"
              >
                Eliminar
              </button>
              {/* Aquí puedes agregar el enlace al editor si es necesario */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}