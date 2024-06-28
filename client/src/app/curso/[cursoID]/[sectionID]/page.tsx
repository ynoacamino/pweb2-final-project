"use client";

import {useState} from 'react';
import { Button } from '@/components/ui/button';
import Title from '@/components/pages/section/Title';
import Description from '@/components/pages/section/Description';
import Video from '@/components/pages/section/Video';

const SECTIONS = [
    {
        title: ' ¿Que es java? ',
        descripcion: 'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos y basado en clases. Fue diseñado para tener la menor cantidad de dependencias de implementación posible, lo que significa que una aplicación escrita en Java puede ejecutarse en cualquier sistema que tenga una Máquina Virtual de Java (JVM). Java es conocido por su simplicidad, portabilidad y robustez.',
    },
    {
        title: 'Historia de Java',
        descripcion: 'Java fue creado en 1995 por James Gosling y su equipo en Sun Microsystems. Desde entonces, ha evolucionado continuamente y se ha convertido en uno de los lenguajes de programación más populares del mundo.',
    },
    {
        title: 'Conceptos de Java',
        descripcion: 'Java incluye conceptos fundamentales como la programación orientada a objetos, la concurrencia, la gestión de memoria automática y una rica API que permite el desarrollo de aplicaciones complejas.',
    },
    {
        title: 'Variables de Java',
        descripcion: 'Las variables en Java son contenedores para almacenar datos. Existen varios tipos de variables, incluidos los tipos primitivos como int, char, y boolean, así como tipos de referencia que apuntan a objetos.',
    }
];

//Prueba usando Secciones para manejo dinamico - Falta

export default function sectionPage(){
    const [index, setIndex] = useState(0);
    function nextSection() {
        if (index < SECTIONS.length - 1) {
            setIndex(index + 1);
        }
    }
    function previousSection() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    const currentSection = SECTIONS[index];

    return(
        <main className="w-full my-12 space-y-2 md:space-y-11">
            <Title name={currentSection.title} />
            <Video />
            <div className="flex w-full p-2">
                <div className="min-w-96 mx-auto p-3 rounded-md">
                    <Button onClick={previousSection} disabled={index === 0} className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6">
                        Anterior Seccion
                    </Button>
                    <Button onClick={nextSection} disabled={index === SECTIONS.length - 1} className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6">
                        Siguiente Seccion
                    </Button>
                </div>
            </div>      
            <Description descripcion={currentSection.descripcion} />
        </main>
    );
}