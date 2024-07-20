'use client';
import { useFetch } from "@/components/pages/fetch/useFetch";
import Back from "@/components/icons/complements/Back";
import Pdf from "@/components/icons/complements/Pdf";

export default function ViewSection({ params }: { params: { sectionID: string } }) {
  const { sectionID } = params;
  const data = {
    section_id: 1,
    curso: 1,
    name: 'section 1',
    description: 'awdawdawdawd',
    video_url: 'https://res.cloudinary.com/dazt6g3o1/video/upload/v1720918457/tcebsrvcvy0bfsmejrlz.mp4',
    created_at: '2024-07-13T19:54:36.392358-05:00',
    updated_at: '2024-07-13T19:54:36.392463-05:00',
    pdfs: [
      {
        name: 'wa',
        url: 'https://example.com/pdf1.pdf',
      },
      {
        name: 'we',
        url: 'https://example.com/pdf2.pdf',
      },
      {
        name: 'wa',
        url: 'https://example.com/pdf3.pdf',
      },
      {
        name: 'we',
        url: 'https://example.com/pdf4.pdf',
      }
    ],
  };
  // const dataN = useFetch(`http://localhost:8000/academia/api/section/${sectionID}/`) as any;

  const pdfs = data?.pdfs || [];

  return (
    <main className="w-full my-12 space-y-2 md:space-y-11">
      <div className="flex">
        <a href="./" className="w-full md:px-44 px-12"> <Back /> </a>
      </div>
      <div className="w-full flex justify-center items-center my-8">
        <span className="text-center max-w-md before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block p-5">
          <span className="justify-center relative text-2xl p-1 font-bold sm:text-4xl sm:p-4"> {data.name} </span>
        </span>
      </div>
      <div className="flex items-center justify-center my-8">
        <div className="max-w-2xl border-2 m-4 bg-transparent">
          <video
            controls 
            className="mx-auto rounded-md shadow-lg"
            src={data.video_url}
            width={640} 
            height={480}
          >
          </video>
        </div>          
      </div>     
      <div className="w-full flex justify-center items-center p-8">
        <div className="max-w-4xl p-8 rounded-md bg-card">
          <p className="text-center md:text-lg text-sm font-medium">
            {data.description}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-3xl">
          {pdfs.map((pdf: any) => (
            <div key={pdf.url} className="flex flex-col items-center p-4 border-2 rounded-md shadow-md">
              <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <Pdf />
                <p className="text-center font-bold mt-2"> {pdf.name} </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
