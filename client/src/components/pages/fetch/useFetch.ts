'use client';

import { useState, useEffect } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const token = window.localStorage.getItem('user-login-token');

    console.log('token', token);

    let config = {};

    if (token) {
      config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
    }

    fetch(url, config)
      .then((response) => {
        if (!response.ok) throw new Error('Respuesta HTTP incorrecta');

        return response.json();
      })
      .then((d) => setData(d))
      .catch((error) => {
        console.error('Hubo un error inesperado:', error);
      });
  }, [url]);

  return data;
}
