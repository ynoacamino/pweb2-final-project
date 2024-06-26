const QUESTIONS = [
    { 
        question : '¿Qué tipos de cursos de programación ofrece su empresa?',
        answer: "Ofrecemos una amplia variedad de cursos de programación, que abarcan desde los fundamentos hasta temas avanzados en diferentes lenguajes como Python, JavaScript, Java, y más. También ofrecemos cursos especializados en áreas como desarrollo web, ciencia de datos, inteligencia artificial y desarrollo de aplicaciones móviles.",
    },
    { 
        question : '¿Cuáles son los requisitos para inscribirse en los cursos de programación?',
        answer: "No se requieren requisitos previos específicos para muchos de nuestros cursos básicos. Sin embargo, para cursos avanzados, es beneficioso tener conocimientos básicos de programación. Cada curso tiene requisitos detallados que se especifican en su descripción.",
    },
    { 
        question : '¿Cuál es la duración típica de sus cursos?',
        answer: "La duración varía según el curso específico. Ofrecemos cursos que van desde unas pocas semanas hasta programas más extensos que pueden durar varios meses, dependiendo del nivel de profundidad y complejidad del contenido cubierto.",
    },
	{ 
        question : '¿Qué tipos de cursos de programación ofrece su empresa?',
        answer: "Ofrecemos una amplia variedad de cursos de programación, que abarcan desde los fundamentos hasta temas avanzados en diferentes lenguajes como Python, JavaScript, Java, y más. También ofrecemos cursos especializados en áreas como desarrollo web, ciencia de datos, inteligencia artificial y desarrollo de aplicaciones móviles.",
    },
    { 
        question : '¿Cuáles son los requisitos para inscribirse en los cursos de programación?',
        answer: "No se requieren requisitos previos específicos para muchos de nuestros cursos básicos. Sin embargo, para cursos avanzados, es beneficioso tener conocimientos básicos de programación. Cada curso tiene requisitos detallados que se especifican en su descripción.",
    },
    { 
        question : '¿Cuál es la duración típica de sus cursos?',
        answer: "La duración varía según el curso específico. Ofrecemos cursos que van desde unas pocas semanas hasta programas más extensos que pueden durar varios meses, dependiendo del nivel de profundidad y complejidad del contenido cubierto.",
    },
];
export default function Questions(){
    return (
        <section className="w-full my-20">
            <div className="mx-auto p-4 my-16">
                <h1 className="text-4xl font-bold text-center text-primary"> Preguntas Frecuentes </h1>
            </div>
            {QUESTIONS.map(({question, answer}) => (
            <div className="max-w-3xl mx-auto p-3 space-y-4 bg-card rounded-md my-4">
                <details className="rounded-lg p-3 divide-y">
                    <summary className="select-none my-2">
                        <p className="text-xl font-bold break-words text-center p-3"> {question} </p>
                    </summary>
                    <div className="p-2 my-2">
                        <p className="break-words text-base text-center"> {answer} </p>
                    </div>
                </details>
            </div>
            ))}
        </section> 
    );
}