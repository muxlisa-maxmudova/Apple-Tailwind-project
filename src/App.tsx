import Controls from "./Components/Controls.tsx";
import {useState} from "react";
import Navbar from "./Components/Navbar.tsx";

const App = () => {
    const [frameZoom, setFrameZoom]= useState<boolean>(false)
    const toggle = () => {
        setFrameZoom(!frameZoom)
    }
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div
                className={`${frameZoom && 'min-w-[97vw] min-h-[97vw]'}'
              w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw]
              max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-300
            '`}>
                <Controls frameZoom={frameZoom} toggleFrameZoom={toggle}/>
                <Navbar/>
            </div>
        </div>
    )
}
export default App
