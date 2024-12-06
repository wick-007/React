
/* eslint-disable react/prop-types */
import { useState } from "react"

export function Jokes({setup,punchline}){
    let[ishown,setishown]=useState(true)
   

    const handleClick = ()=>{
        setishown((ishown)=>!ishown)
        console.log(!ishown)
    }


    return(
        <div>
            <div className=" p-5 border-2 border-green-300 w-80 rounded-md m-4 shadow-2xl bg-slate-100">
                {setup ? <h1>Setup:{setup}</h1> : ""}
                {ishown ? <p>Punchline:{punchline}</p>: null}
                <button className="border-2 solid border-emerald-500" onClick={handleClick}>{ishown ? "Hide Punchline" : "Show Punchline"}</button>
            </div>
        </div>
    )
}