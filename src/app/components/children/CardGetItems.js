export default function CardMenus(props) {
    console.log(props);
    
    return (
        <>
            <section className="flex flex-row gap-3 items-center border-2 border m-3 p-2 w-[35rem] h-35 rounded-lg hover:shadow-lg hover:translate-y-[-3px] duration-[0.2s] ease-in-out justify-between">
                <div className="font-bold flex gap-4 items-center">
                    <div className="w-20 h-20 rounded-md text-4xl border-2 rounded-md p-1 flex items-center justify-center">
                        {props.image}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold text-gray-800">{props.title}</h2>
                        <p className="text-sm text-gray-600">{props.description}</p>
                        <p className=" text-md font-bold text-green-700 align-right ">{props.price} €</p>
                    </div>
                </div>
            </section>
        </>
    )
}