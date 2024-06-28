export default function Description({descripcion}: {descripcion:string}){
    return(
        <section className="w-full flex justify-center items-center p-8">
            <div className="max-w-4xl p-8 rounded-md bg-card">
                <p className="text-center md:text-lg text-sm font-medium">
                    {descripcion}
                </p>
            </div>
        </section>
    );
}