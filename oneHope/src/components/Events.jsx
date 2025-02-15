import { DisplayItem } from "./helper/DisplayItem";

import community from '/community.png'
import question from '/question.png'
import stream from '/stream.png'

export function Events(){
    const description ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil debitis repellat iste .'
    return (
        <>
            <div id="events" className="flex flex-col gap-20 py-20">
                <div className="text-3xl text-center font-poppins">Upcoming Events</div>
                <div className="flex flex-row justify-center gap-30">
                    <DisplayItem name="Community" img={community} description={description} bg="bg-fntColor" rounded="rounded-4xl" />
                    <DisplayItem name="Community" img={stream} description={description} bg="bg-fntColor" rounded="rounded-4xl"/>
                    <DisplayItem name="Community" img={question} description={description} bg="bg-fntColor" rounded="rounded-4xl"/>
                </div>
            </div>
        </>
    )
}