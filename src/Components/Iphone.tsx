import {iphoneModels} from "../assests/data.ts";

const Iphone = () => {
    return (
        <div className={`w-full h-full flex flex-col items-center justify-around bg-white p-8`}>
            <h3 className={`2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8`}>
                 Which Iphone is right for you?
            </h3>
            <div className={`flex justify-between w-full`}>
                {iphoneModels.map((item) => (
                    <div className={`flex flex-col items-center justify-between gap-y-2`} key={Math.random()}>
                        <img
                            src={item.img}
                            alt={item.name}
                            className={"object-contain 2xl:w-72 lg:w-64 sm:w-48 md:h-48 "}
                        />
                        <a href={'#'}
                           className={"2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 mt-4"}>
                            {item.name}
                        </a>
                        <p className={"2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2"}>
                            {item.description}
                        </p>
                        <span className={"2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2"}>
                            {item.price}
                        </span>
                        <button type={"button"} className={"text-sm px-5 py-2.5 bg-blue-400 text-white rounded-full cursor-pointer"}>
                            Buy
                        </button>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default Iphone
