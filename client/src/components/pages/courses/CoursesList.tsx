'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CourseCard from './CourseCard';

export function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/academia/api/curso/')
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

  return (
    <Carousel className="w-full max-w-6xl my-20">
      <CarouselContent>
        {courses.map(({ id, description, image_url, name }) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={id}>
            <CourseCard
              description={description}
              image={image_url}
              name={name}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
