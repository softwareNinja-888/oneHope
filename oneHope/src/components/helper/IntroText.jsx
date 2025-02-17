export function IntroText({title='Enter Title',description="Enter Description",activeNum,activeTab,setActiveTab,}){
    return (
        <>
            <div onClick={() => setActiveTab(activeNum)} className="flex items-start cursor-pointer space-x-4 px-4">
                <div className="flex items-start h-12/12">
                {activeTab === activeNum && <div className="w-1 bg-bgSecond h-full"></div>}
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold">
                        {title}
                    </h2>
                    <p className="text-sm">
                       {description}
                    </p>
                </div>
            </div>
        </>
    )
}