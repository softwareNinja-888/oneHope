import { DisplayItem } from "./helper/DisplayItem";

import community from '/community.png'
import question from '/question.png'
import stream from '/stream.png'
import event from '/event.png'

export function Services(){
    const description ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis repellat iste .'
    return (

        <>
            <div className="flex flex-col gap-20 bg-bgSecond py-20 mt-10 text-white max-w-screen">
                <div className="text-3xl text-center font-poppins">What to Expect</div>
                <div className="flex justify-center gap-16 ">
                    <DisplayItem description={description} name="Community" img={community}/>
                    <DisplayItem description={description} name="Find Answers" img={question}/>
                    <DisplayItem description={description} name="Stream Sermons" img={stream}/>
                    <DisplayItem description={description} name="Weekly Events" img={event}/>
                </div>
            </div>
        </>
    )
}