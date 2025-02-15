import { Button } from "./helper/Button";
import pastor from '/pastor1.jpg'

export function PastorProfile(){
    return (
        <>
            <div id="pastor" className="bg-bgSecond text-white flex justify-center items-center gap-20 py-20">
                <div className="max-w-[500px] flex flex-col gap-8">
                    <div className="text-5xl font-poppins">Meet Out Pastor</div>
                    <div className="font-roboto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ex beatae rerum eveniet, illo omnis quisquam quis sapiente, laboriosam placeat adipisci soluta ea itaque magnam praesentium quae eum, modi tempore?</div>
                    <Button text="Contact" extra='font-poppins'/> 
                </div>
                <div className="h-[430px] max-w-96">
                    <img src={pastor} alt="pastor image" className="w-full h-full rounded-4xl cursor-pointer" />
                </div>
            </div>
        </>
    )
}