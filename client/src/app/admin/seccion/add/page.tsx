'use client';

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PageAdd(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState<File | null>(null);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const body = {
            name,
            description,
        };
    
        fetch('', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('No se pudo agregar la seccion');
            }
            router.push('/');
            })
        .catch((err) => console.error(err));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Curso:</h1>
            <h1 className="text-2xl font-bold mb-4">Agregar Sección</h1>
            <form action="" method="POST" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-lg font-medium mb-2">Nombre de la Sección:</label>
                    <input 
                        type="text" 
                        placeholder="Ingrese el nombre" 
                        className="w-full p-2 border rounded"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Ingrese el video:</label>
                    <input type="file"  className="w-full p-2 border rounded"/>
                </div>
                <div>
                    <label className="block text-lg font-medium mb-2">Ingrese la Descripción:</label>
                    <textarea placeholder="Ingresar Descripción" className="w-full p-2 border rounded " onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <Button className="w-full p-2 font-bold rounded cursor-pointer " type="submit"> Subir Curso </Button>
                </div>
            </form>
        </div>
    );
}