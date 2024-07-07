'use client';

import { Button } from "@/components/ui/button";
import { redirect, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
const SECTIONS = [
    {
        title: ' ¿Que es java? ',
        description: 'Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos y basado en clases. Fue diseñado para tener la menor cantidad de dependencias de implementación posible, lo que significa que una aplicación escrita en Java puede ejecutarse en cualquier sistema que tenga una Máquina Virtual de Java (JVM). Java es conocido por su simplicidad, portabilidad y robustez.',
    },
    {
        title: 'Historia de Java',
        description: 'Java fue creado en 1995 por James Gosling y su equipo en Sun Microsystems. Desde entonces, ha evolucionado continuamente y se ha convertido en uno de los lenguajes de programación más populares del mundo.',
    },
    {
        title: 'Conceptos de Java',
        description: 'Java incluye conceptos fundamentales como la programación orientada a objetos, la concurrencia, la gestión de memoria automática y una rica API que permite el desarrollo de aplicaciones complejas.',
    },
    {
        title: 'Variables de Java',
        description: 'Las variables en Java son contenedores para almacenar datos. Existen varios tipos de variables, incluidos los tipos primitivos como int, char, y boolean, así como tipos de referencia que apuntan a objetos.',
    },
];

export default function PageRead(){
    const [sections, setSection] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:8000/academia/api/section/')
    //       .then((res) => res.json())
    //       .then((data) => setSection(data));
    // }, []);
    const router = useRouter();
    const handleEliminated = () => { };

    return(
        <div className="w-full p-16 ">
            <div className="w-full p-4 shadow rounded-lg mb-4">
                <div className="mb-2">
                    <p className="font-semibold text-4xl p-2">Curso:</p>
                    <p> Descripcion del curso : </p>
                </div>
                <div className="flex justify-end">
                    <Button className="mt-2 px-4 py-2 rounded ">
                        <a href="../seccion/add">Agregar Seccion</a>
                    </Button>
                </div>
            </div>
            <div className="space-y-4">
            {SECTIONS.map((section, index) => (
                <div key={index} className="mx-8 flex justify-between rounded-lg shadow">
                    <div className="max-w-6xl p-6 mx-8">
                        <h3 className="font-bold">{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                    <div className="flex items-center justify-center border-black p-4">
                        <Button onClick={handleEliminated} className="mx-4 py-2 rounded">
                            <a href="">Eliminar</a>
                        </Button>
                        <Button className="mx-4 py-2 rounded">
                            <a href="">Modificar</a>
                        </Button>
                    </div>                      
                </div>
            ))}
            </div>
        </div>
    );
}