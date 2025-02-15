export function Button({styles='flex justify-center border border-btn px-4 py-3 text-bg bg-btn cursor-pointer w-36',text='Button Name',extra=''}){

    return (
        <>
            <div className={`${styles} ${extra} `}>
                {text}
            </div>
        </>
    )
}