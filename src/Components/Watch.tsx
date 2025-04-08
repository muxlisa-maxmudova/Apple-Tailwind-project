import {watchModels} from "../assests/data.ts";
const Watch = () => {
    return (
        <div className={`flex flex-col h-full item-center justify-around bg-white py-8 px-8`}>
            <h1 className={`2xl:text-4xl xl:text-3xl font-semibold text-gray-800 mb-8`}>
                Which Apple Watch is right for you?
            </h1>
            <div className={`w-full flex justify-around`}>
                <div className={`w-60 h-[430px] flex flex-col justify-around`}>
                    <div className={`w-full h-64 mb-4 overflow-hidden relative`}>
                        <img
                            src={`images/watch10-side.png`}
                            alt={`Watch`}
                            className={`absolute w-full h-full object-contain`}
                        />
                    </div>
                    <h3 className={`2xl:text-xl xl:text-lg text-sm font-semibold`}>
                        Apple Watch Series 18
                    </h3>
                    <a
                        href={"#"}
                        className={`my-2 text-base text-blue-400`}
                    >
                        From $399
                    </a>
                    <div className={`md:text-sm text-xs text-gray-700 my-2`}>
                        <span className={`block`}>45mm or 41mm case size</span>
                    </div>
                    <button className={`w-min text-sm mt-4 p-1.5 bg-blue-400 rounded-full text-white`}>
                        Shop
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Watch
