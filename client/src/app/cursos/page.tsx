import Certifications from '@/components/pages/courses/Certifications';
import { CoursesList } from '@/components/pages/courses/CoursesList';
import Info from '@/components/pages/courses/Info';
import Title from '@/components/pages/courses/Title';
import Questions from '@/components/pages/courses/Questions';

export default function cursosPage() {
  return (
    <main className="w-full flex flex-col items-center">
      <Title />
      <CoursesList />
      <Certifications />
      <Info />
      <Questions />
    </main>
  );
}
