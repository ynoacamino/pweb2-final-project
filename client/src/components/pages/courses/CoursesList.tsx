import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import CourseCard from './CourseCard';

const COURSES = [
  {
    name: 'Curso de JavaScript',
    description: 'Aprende a programar con JavaScript, el lenguaje de programación más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de React',
    description: 'Aprende a crear aplicaciones web con React, el framework de JavaScript más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de Vue',
    description: 'Aprende a crear aplicaciones web con Vue, el framework de JavaScript más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de JavaScript',
    description: 'Aprende a programar con JavaScript, el lenguaje de programación más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de React',
    description: 'Aprende a crear aplicaciones web con React, el framework de JavaScript más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de Vue',
    description: 'Aprende a crear aplicaciones web con Vue, el framework de JavaScript más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de JavaScript',
    description: 'Aprende a programar con JavaScript, el lenguaje de programación más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de React',
    description: 'Aprende a crear aplicaciones web con React, el framework de JavaScript más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
  {
    name: 'Curso de Vue',
    description: 'Aprende a crear aplicaciones web con Vue, el framework de JavaScript más popular.',
    image: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1719157975/ecyf3ye0dnn5hbgydsjx.png',
  },
];

export function CoursesList() {
  return (
    <Carousel className="w-full max-w-6xl my-20">
      <CarouselContent>
        {COURSES.map(({ description, image, name }) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={crypto.randomUUID()}>
            <CourseCard
              description={description}
              image={image}
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
