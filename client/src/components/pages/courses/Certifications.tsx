import Icon1 from '@/components/icons/certifications/Icon1';
import Icon2 from '@/components/icons/certifications/Icon2';
import Icon3 from '@/components/icons/certifications/Icon3';

const CERTIFICATIONS = [
  {
    Icon: Icon1,
    label: 'Cybersecurity for Beginners from CISCO',
  },
  {
    Icon: Icon2,
    label: 'AWS Certified Solutions Architect',
  },
  {
    Icon: Icon3,
    label: 'Google Cloud Platform Fund',
  },
  {
    Icon: Icon1,
    label: 'Cybersecurity for Beginners from CISCO',
  },
];

export default function Certifications() {
  return (
    <section className="w-full max-w-6xl px-6 flex flex-col gap-10 my-40">
      <h1 className="text-4xl font-bold flex flex-col gap-1 items-center justify-start">
        <span>
          Obten
          {' '}
        </span>
        <span className="text-primary text-5xl">
          certificaciones oficiales
          {' '}
        </span>
        <span>
          de:
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {
          CERTIFICATIONS.map(({ Icon, label }) => (
            <div key={crypto.randomUUID()} className="w-full bg-card shadow-md rounded-md p-10 flex gap-10 items-center min-h-56">
              <Icon className="w-24 h-auto" />
              <span className="text-xl font-semibold text-center flex-1">{label}</span>
            </div>
          ))
        }
      </div>
    </section>
  );
}
