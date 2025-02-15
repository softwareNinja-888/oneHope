import { Button } from './helper/Button'
import logo from '/logo.jpeg'

export function Header(){
    return (
        <>
            <div className="flex justify-between items-center w-screen px-10">
                <div className="">
                    <img src={logo} alt="logo" className="w-36 h-36" />
                </div>
                <nav className="hidden lg:flex space-x-20 text-sm text-black font-mont ">
                

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs">
                        Home
                    </div>

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs">
                        About
                    </div>

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs">
                        Sermons
                    </div>

                    <div className=" flex gap-1.5 no-underline relative cursor-pointer text-inherit after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100 hover:after:bg-btn text-base max-[500px]:text-xs">
                        Donate
                    </div>

                </nav>
                <div className="flex gap-5">
                    <Button text='Wacth Online'/>
                    <Button text="Resources"/>
                </div>
            </div>
        </>
    )
}