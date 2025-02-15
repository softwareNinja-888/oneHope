export function Button({styles='border border-btn px-4 py-3 rounded text-bg bg-btn cursor-pointer',text='Button Name'}){

    return (
        <>
            <div className={`${styles} `}>
                {text}
            </div>
        </>
    )
}