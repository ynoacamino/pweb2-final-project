export default function Title({name}:{name:string}){
    return(
        <section className="w-full flex justify-center items-center my-8">
            <span className="text-center max-w-md before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block p-5">
                <span className="justify-center relative text-2xl p-1 font-bold sm:text-4xl sm:p-4"> {name} </span>
            </span>
        </section>
    );
}