import { useEffect } from "react"


export default function CardAbout({title, body, icon, active}) {
    
    useEffect(() => {
        console.log(active)
    }, [active])

    return (
        <div className={` ${active && 'bg-sky-900 shadow-xl scale-105'} p-7 w-72 h-64 rounded-lg flex flex-col item-center justify-center`}>
            <span className="inline-block w-12 p-2 bg-sky-800 rounded-md shadow-lg mb-2">
                {icon}
            </span>
            <h3 className={`${active && 'text-gray-50'} text-xl font-semibold mb-4 `}>{title}</h3>
            <p className={`${active && 'text-gray-100'} font-extralight text-sm tracking-wide text-gray-700`}>{body}</p>
        </div>
    )
}