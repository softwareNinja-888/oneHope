export function ServiceItem({name="Name",description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis repellat iste .',img}){
    return (
        <>
            <div className="flex flex-col justify-center items-center border border-fntColor py-6 px-4 bg-bg text-black gap-2 w-64">
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