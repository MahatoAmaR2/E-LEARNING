import { FaQuoteLeft } from "react-icons/fa";

function AboutCard({quote, name }){
    return(
        <>
            <div className=" relative selection:bg-sky-900 shadow-2xl rounded-lg w-[340px] shadow-black h-fit p-8 " >
                <p className="absolute top-2 left-2"><FaQuoteLeft/></p>
                <p className="text-[18px] font-thin">{quote}</p>
                <p className="mt-6 text-[14px] font-light text-gray-400">{name}</p>
                {/* if i want add avtar */}
                <p>{Date.now()}</p>
            </div>
        </>
    )
}

export {AboutCard}