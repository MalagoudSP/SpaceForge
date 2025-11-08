export default function TextContainer({children}) {
    return(
        <>
        <div className="flex flex-col items-center
                        min-lg:items-start min-lg:h-[100%]
                        ">
            {children}
        </div>
        </>
    )
}