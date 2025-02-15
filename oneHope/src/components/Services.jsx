import { ServiceItem } from "./helper/ServiceItems";

import community from '/community.png'
import question from '/question.png'
import stream from '/stream.png'
import event from '/event.png'

export function Services(){
    return (

        <>
            <div className="flex flex-col gap-10 bg-bgSecond py-20 mt-10 text-white max-w-screen">
                <div className="text-3xl text-center font-poppins">What to Expect</div>
                <div className="flex justify-center gap-16 ">
                    <ServiceItem name="Community" img={community}/>
                    <ServiceItem name="Find Answers" img={question}/>
                    <ServiceItem name="Stream Sermons" img={stream}/>
                    <ServiceItem name="Weekly Events" img={event}/>
                </div>
            </div>
        </>
    )
}