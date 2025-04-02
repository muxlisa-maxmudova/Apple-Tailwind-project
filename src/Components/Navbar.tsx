const Navbar = () => {
    return (
        <div className="2xl:w-80 xl:w-52 w-44 h-full bg-blue-600 flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
            <a href="#" className={"2xl:test-2xl xl:test-xl font-b0ld text-white tracking-wider"}>
                    Apple products
            </a>
            <div className={"flex flex-col flex-grow"}>
                <a href={'#'} className={"xl:w-36 lg:w-34 w-30 flex items-center justify-between my-3.5 text text-left cursor-pointer"}>
                    <i className={"bx bx-home-alt-2 text-xl text-white"}></i>
                    <span className={"text-sm text-gray-50 mr-auto mx-2.5 tracking-wider"}>Home</span>
                    <i className={"text-lg text-yellow-500 bx bxs-folder"}></i>
                </a>
            </div>
        </div>
    )
}
export default Navbar
