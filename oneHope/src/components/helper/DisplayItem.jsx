export function DisplayItem({name="Name",description='',img,bg='bg-bg',rounded='rounded'}){
    return (
        <>
           <div className={`flex flex-col justify-center items-center border border-fntColor py-10 px-4 text-black gap-2 w-64 ${bg} ${rounded} transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-x-2 hover:-translate-y-2 active:-translate-x-5 active:-translate-y-5`}>
                <div className="border border-bg bg-bg max-w-16 rounded-full p-2">
                    <img src={img} alt="Service icon" className="w-full rounded-full" />
                </div>
                <div className="text-center text-xl">{name}</div>
                <div className="text-center font-inter">
                    {description}
                </div>
            </div> 
        </>
    )
}