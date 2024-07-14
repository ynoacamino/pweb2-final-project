'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { useFetch } from '../fetch/useFetch';
import CourseCard from './CourseCard';

export function CoursesList() {
  const courses = useFetch('http://localhost:8000/academia/api/curso/') as any[];

  return (
    <Carousel className="w-full max-w-6xl my-20">
      <CarouselContent>
        {courses.map(({
          description, image_url, name, curso_id,
        }) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={crypto.randomUUID()}>
            <CourseCard
              description={description}
              image={image_url}
              name={name}
              curso_id={curso_id}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
