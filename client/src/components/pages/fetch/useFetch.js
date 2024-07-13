'use client';

import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok)
          throw new Error('Respuesta HTTP incorrecta');

        return response.json();
      })
      .then(data => setCourses(data))
      .catch(error => {
        console.error('Hubo un error inesperado:', error);
      });
  }, []);

  return { courses }
}
