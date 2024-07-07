import { Button } from "@/components/ui/button";
import { redirect, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PageEdit(){
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Curso:</h1>
            <h1 className="text-2xl font-bold mb-4">Editando Sección</h1>
            <form action="" method="POST" className="space-y-4">
                <div>
                    <label className="block text-lg font-medium mb-2">Nombre de la Sección:</label>
                    <input 
                        type="text" 
                        placeholder="Ingrese el nombre" 
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Ingrese el video:</label>
                    <input type="file"  className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Ingrese la Descripción:</label>
                    <textarea placeholder="Ingresar Descripción" className="w-full p-2 border rounded"></textarea>
                </div>
                <div className="flex w-full p-2">
                    <div className="min-w-96 mx-auto p-3 rounded-md">
                        <Button className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6">
                            Realizar cambios
                        </Button>
                        <Button className="font-bold mx-8 text-xs p-2 md:text-lg md:p-6 ">
                            Cancelar
                        </Button>
                    </div>
                </div> 
            </form>
        </div>
    );
}