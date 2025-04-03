const Controls = ({frameZoom, toggleFrameZoom}:{frameZoom: boolean, toggleFrameZoom:()=>void}) => {
    return (
        <div className='absolute top-3 right-3 space-x-2 z-1'>
            <button className='text-2xl text-blue-500 cursor-pointer' onClick={toggleFrameZoom}>
                <i className={frameZoom?'bx bxs-zoom-out':'bx bxs-zoom-in'}></i>
            </button>
            <button className='text-2xl text-red-500 cursor-pointer'>
                <i className='bx bxs-x-circle'></i>
            </button>
        </div>
    )
}
export default Controls

