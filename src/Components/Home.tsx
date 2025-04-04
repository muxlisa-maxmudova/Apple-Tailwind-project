import {items} from "../assests/data.ts";

const Home = () => {
    return (
        <div className={"w-full h-full grid grid-cols-2 gap-rows-2 gap-4 bg-gray-50 max-sm:grid-cols-1 max-sm:grid-rows-4"}>
            {items.map((item:items) => (
                <div className="flex flex-col flex-grow items-center justify-center bg-white" key={Math.random()}>
                <span
                    className={'text-xl font-bold bg-gradient-to-b from-blue-700 to-red-500 bg-clip-text text-transparent tracking-wide mb-12'}>
                    {item.label}
                </span>
                    <img
                        src={item.img}
                         alt={item.label}
                        className={"max-w-[40%] max-h-[35%] object-center max-[600px]:hidden"}
                        draggable={false}
                    />
                </div>
            ))}


        </div>
    )
}
export default Home
