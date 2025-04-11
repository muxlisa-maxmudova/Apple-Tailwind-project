import Controls from "./Components/Controls.tsx";
import {useState} from "react";
import Navbar from "./Components/Navbar.tsx";
import Watch from "./Components/Watch.tsx";
import IMac from "./Components/IMac.tsx";
import PageTransition from "./Components/PageTransition.tsx";
import Home from "./Components/Home.tsx";
import Iphone from "./Components/Iphone.tsx";
import MacBook from "./Components/MacBook.tsx";

const App = () => {
    const [frameZoom, setFrameZoom]= useState<boolean>(false)
    const [activePage, setActivePage] = useState<number>(0)
    const toggle = () => {
        setFrameZoom(!frameZoom)
    }
    const handleNavClick = (pageIndex:number) => {
        setActivePage(pageIndex)
    }
    return (
        <div className='w-full h-screen grid place-items-center'>
            <div
                className={`${frameZoom && 'min-w-[97vw] min-h-[97vw]'}'
              w-[70vw] h-[97vh] min-w-[70vw] min-h-[85vh] max-w-[90vw]
              max-h-[95vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-300 flex
            '`}>
                <Navbar handleNavClick={handleNavClick} activePage={activePage}/>
                <Controls frameZoom={frameZoom} toggleFrameZoom={toggle}/>
                <div className={'flex-grow'}>
                    <PageTransition activePage={activePage}>
                        <Home/>
                        <Iphone/>
                        <MacBook/>
                        <Watch/>
                        <IMac/>
                    </PageTransition>

                </div>
            </div>
        </div>
    )
}
export default App
