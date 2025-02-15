import { Button } from './helper/Button'
import {HeroImage} from './helper/HeroImage'
import group from '/events/eventsB1.webp'
export function Hero (){
    return (
        <>
            <div className="flex justify-between items-center py-20 px-20">
                <div className="flex flex-col gap-6 max-w-[490px]">
                    <div className="font-poppins text-5xl">
                        Come As You Are. And Experience Gods Love
                    </div>
                    <div className="text-lg font-inter">
                       FInd hope, belonging, and purpose in a community that cares. Join us this Sunday where lives are transformed by the love of Jesus!
                    </div>
                    <div className="flex gap-10">
                        <Button text='Watch Online' extra='font-roboto'/>
                        <Button text='Get Directions' extra='font-roboto'/>

                    </div>
                </div>
                <div className="">
                    <HeroImage img={group}/>
                </div>
            </div>
        </>
    )
}