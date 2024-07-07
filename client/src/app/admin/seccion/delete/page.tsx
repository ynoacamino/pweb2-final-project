'use client';

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from "next/image";

export default function PageDelete(sections: any){
    const router = useRouter();
    // const [listSections, setListSections] = useState([...sections])

    // const deleteSection = id =>{
    //     const newListSection = sections.filter(item => item.id != id);
    //     setListSections(newListSection);
    // }
    return(
        <div className="w-full my-6 space-y-2 md:space-y-4">
            <div className="w-full flex justify-center items-center my-8">
                <span className="text-center max-w-md before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block p-5">
                    <span className="justify-center relative text-2xl p-1 font-bold sm:text-4xl sm:p-4">Curso</span>
                </span>
            </div>  
            <div className="flex items-center justify-center">
                <div className="max-w-2xl border-2 m-4 bg-transparent">
                    <Image className="mx-auto rounded-md shadow-lg" 
                        src="https://res.cloudinary.com/dk5ic4rxo/image/upload/v1719452523/cld-sample-2_qebvkx.jpg" 
                        alt="Imagen de colores arremolinados interactuando"
                        width={640} 
                        height={480}
                    />
                </div>          
            </div>     
            <div className="w-full flex justify-center items-center p-8">
                <div className="max-w-4xl p-8 rounded-md bg-card">
                    <p className="text-center md:text-lg text-sm font-medium">
                        Java fue creado en 1995 por James Gosling y su equipo en Sun Microsystems. Desde entonces, ha evolucionado continuamente y se ha convertido en uno de los lenguajes de programación más populares del mundo.
                    </p>
                </div>
            </div>
            <div className="flex w-full p-2">
                <div className="min-w-96 mx-auto p-3 rounded-md">
                    <Button className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6">
                        Eliminar
                    </Button>
                    <Button className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6" onClick={() => router.back()}>
                        <a href="../seccion/read"> Cancelar </a>
                    </Button>
                </div>
            </div> 
        </div>
    );
}