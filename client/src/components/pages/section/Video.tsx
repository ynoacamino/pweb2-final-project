import Image from 'next/image';
// Imagen de referencia de por si debe ser un video 

export default function Video(){
    return(
        <section className="flex items-center justify-center my-8">
            <div className="max-w-2xl boder-2 m-4 bg-transparent">
                <Image className="mx-auto rounded-md shadow-lg" 
                        src="https://res.cloudinary.com/dk5ic4rxo/image/upload/v1719452523/cld-sample-2_qebvkx.jpg" 
                        alt="Imagen de colores arremolinados interactuando"
                        width={640} 
                        height={480}
                />
            </div>          
        </section>
    );
}