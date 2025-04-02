import {items} from "../assests/data.ts";

const Home = () => {
    return (
        <div className={"w-full h-full grid grid-cols-2 gap-rows-2 gap-4 bg-gray-50"}>
            {items.map((item) => (
                <div className="flex flex-col flex-grow items-center justify-center bg-white" key={Math.random()}>
                <span
                    className={'text-xl font-bold bg-gradient-to-b from-blue-700 to-red-500 bg-clip-text text-transparent tracking-wide mb-12'}>
                    {item.label}
                </span>
                    <img
                        src={"images/iphone.jpg"}
                         alt={item.label}
                        className={"max-w-[65%] max-h-[65%] object-center"}
                        draggable={false}
                    />
                </div>
            ))}


        </div>
    )
}
export default Home
