import { Button } from './helper/Button'
import logo from '/logo.jpeg'

export function Header(){

    function toSection (section) {
        const contactSection = document.getElementById(section);
        contactSection?.scrollIntoView({ behavior: "smooth" });
        };
    
    return (
        <>
            <div className="flex justify-between items-center w-screen px-10">
                <div className="">
                    <img src={logo} alt="logo" className="md:w-48 md:h-24 cursor-pointer" />
                </div>
                <nav className="hidden lg:flex space-x-20 text-sm text-black font-mont ">
                

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs" >
                        Home
                    </div>

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs" onClick={()=>{toSection('services')}}>
                        Service Time
                    </div>

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs" onClick={()=>{toSection('pastor')}}>
                        Our Pastor
                    </div>

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs" onClick={()=>{toSection('donate')}}>
                        Donate
                    </div>

                </nav>
                <div className="flex gap-5">
                    <Button extra='font-inter' text="Resources"/>
                </div>
            </div>
        </>
    )
}