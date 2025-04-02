import {navItems} from "../assests/data.ts";
const Navbar = ({handleNavClick, activePage}:{handleNavClick:()=>void, activePage:number}) => {
    return (
        <div className="2xl:w-80 xl:w-52 w-44 h-149 bg-blue-600 flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
            <a href="#" className={"2xl:test-2xl xl:test-xl font-b0ld text-white tracking-wider"}>
                Apple products
            </a>
            <div className={"flex flex-col flex-grow"}>
                {navItems.map((item, index: number) => (
                    <a href={'#'} key={Math.random()}
                       className={"xl:w-36 lg:w-34 w-30 flex items-center justify-between my-3.5 text text-left cursor-pointer"}
                       onClick={() => handleNavClick(index)}
                    >
                        <i className={item.icon}></i>
                        <span className={"text-sm text-gray-50 mr-auto mx-2.5 tracking-wider"}>{item.label}</span>
                        <i className={`text-lg text-yellow-500 bx bxs-folder ${activePage === index ? item.activeIcon : item.inactiveIcon}`}></i>
                    </a>
                ))}
            </div>
            <div className={"flex justify-between pr-6 pb-2"}>
                <a href={"#"}>
                    <i className={"bx bxl-instagram text-2xl text-white"}></i>
                </a>
                <a href={"#"}>
                    <i className={"bx bxl-telegram text-2xl text-white"}></i>
                </a>
                <a href={"#"}>
                    <i className={"bx bxl-youtube text-2xl text-white"}></i>
                </a>
            </div>
        </div>
    )
}
export default Navbar
