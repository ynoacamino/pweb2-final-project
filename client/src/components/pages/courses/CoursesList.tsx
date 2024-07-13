'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import  { useFetch } from '../fetch/useFetch';
import CourseCard from './CourseCard';

export function CoursesList() {
  const { courses } = useFetch('http://localhost:8000/academia/api/curso/')
  
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
