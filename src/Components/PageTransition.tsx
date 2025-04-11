import { useEffect, useState} from "react";
import * as React from "react";

const PageTransition = ({activePage, children}:{activePage:number}) => {
    const [currentPage, setCurrentPage] = useState(activePage);
    const [transitioning, setTransitioning] = useState<boolean>(false)
    useEffect(()=>{
        if(currentPage!==activePage){
            setTransitioning(true)
            setTimeout(()=>{
                setCurrentPage(activePage)
                setTransitioning(false)
            }, 555)
        }
    }, [activePage, currentPage])
    return (
        <div className={`w-full h-full overflow-hidden relative`} style={{backgroundImage: 'url(images/pages-bg.png)'}}>
            <div className={`absolute w-full h-full transition-transform duration-500 ${
                transitioning ? '-translate-y-full' : 'translate-y-0'
            }`}>
                {children[currentPage]}
            </div>
        </div>
    )
}
export default PageTransition
