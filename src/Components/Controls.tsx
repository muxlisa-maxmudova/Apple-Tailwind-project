const Controls = ({frameZoom, toggleFrameZoom, resetPage, activePage}:{frameZoom: boolean, toggleFrameZoom:()=>void, resetPage:()=>void, activePage:number|null}) => {
    return (
        <div className='absolute top-3 right-3 space-x-2 z-1'>
            <button className='text-2xl text-blue-500 cursor-pointer' onClick={toggleFrameZoom}>
                <i className={frameZoom?'bx bxs-zoom-out':'bx bxs-zoom-in'}></i>
            </button>
            <button className={`text-2xl ${activePage === 0 ? "text-pink-200 cursor-not-allowed":"text-blue-500 cursor-pointer"}`} onClick={resetPage}>
                <i className='bx bxs-x-circle'></i>
            </button>
        </div>
    )
}
export default Controls

