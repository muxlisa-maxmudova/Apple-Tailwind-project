import {macbookModels} from "../assests/data.ts";
import {useState} from "react";

const MacBook = () => {
    const [selectedChip, setSelectedChip] = useState<number>(0);
    const [selectedColor, setSelectedColor] = useState<number>(0);
    const currentMb = macbookModels[selectedChip];
    const currentColor = currentMb.colors[selectedColor];
    const handleSelectedChip = (chip:number) => {
        setSelectedChip(chip)
        setSelectedColor(0)
    }
    return (
        <div className={`flex flex-col h-full items-center justify-around bg-white p-8`}>
            <h1 className={`2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-5`}>
                Choose Your New MackBook AIR
            </h1>
            <div className={'flex'}>
                {macbookModels.map((item:macbookModels, index:number) => (
                    <button key={Math.random()}
                            onClick={() => {handleSelectedChip(index)}}
                            className={`2xl:w-36 md:w-26 w-28 2xl:hue-rotate-180 md:h-13 h-13 flex flex-col justify-evenly items-center border ${index === 0 ? 'rounded-l-xl' : 'rounded-r-xl'} cursor-pointer`}>
                    <span className={`2xl:text-lg xl:text-sm text-xs font-bold text-gray-800`}>
                        With {item.chip} chip
                    </span>
                        <span className={`2xl:text-base xl:text-sm text-xs text-gray-600`}>
                        {item.price}
                    </span>
                    </button>
                ))}
            </div>
            <div className={` flex flex-col 2xl:p-4 md:items-start item-center`}>
                <div className={`w-80 h-auto 2xl:mb-0 mb-8`}>
                    <img
                        src={currentColor.img}
                        alt={currentMb.chip}
                        className={`2xl:w-72 xl:w-52 w-full 2xl:mt-0 sm:mt-6 `}/>
                    <span className={`2xl:text-lg xl:text-sm font-medium text-gray-800 mb-2 text-center md:text-left`}>
                        {currentColor.label}
                    </span>
                    <div className={`flex space-x-2 mb-4 md:text-left justify-center md:justify-start`}>
                        {currentMb.colors.map((color, index) => (
                            <button
                                key={Math.random()}
                                style={{backgroundColor: color.bg}}
                                className={`2xl:w-6 sm:w-5 w-4 my-0 2xl:h-6 sm:h-5 h-4 bg-[${color.bg}] rounded-full border hover:border-blue-500
                                ${selectedColor === index ? `border-2 border-blue-400` : `border-transparent`}
                                `}
                                onClick={() => setSelectedColor(index)}
                            >
                            </button>
                        ))}
                    </div>
                    <img
                        src={currentMb.icon} alt={currentMb.chip} className={`w-12 h-12 2xl:mb-2 xl:mb-2`}/>
                    <div>
                        {currentMb.specs.map((spec) => (
                            <span key={Math.random()} className={`2xl:text-lg xl:text-base font-semibold text-gray-800 mb-5 `}>
                                {spec}
                            </span>
                        ))}
                    </div>
                    <button className={`w-min text-sm py-1 px-3 bg-blue-400 text-white rounded-full mt-4 mb-5 md:mt-0`}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    )
}
export default MacBook