'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

export function CoursesList() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/academia/api/curso/')
      .then((res) => res.json())
      .then((data) => setCursos(data));
  }, []);

  return (
    <Carousel className="w-full max-w-6xl my-20">
      <CarouselContent>
        {cursos.map(({ description, name }) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={crypto.randomUUID()}>
            <CourseCard
              description={description}
              image="https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png"
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
