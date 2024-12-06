import { useState } from "react"
import soundpad from "../../../soundpad"



export default function SoundPad(){
    let [pads,setPads] = useState(soundpad)

    const Pad = pads.map((pad)=>{
        return   <button key={pad.id} className="border-2 solid border-purple-500 w-36 p-2 m-1">{pad.color}</button> 
    })
   
    console.log(soundpad)

    
   

    return(
        <div>
          <h1 className="text-2xl"> Sound Pads</h1>
          <div>{Pad}</div>
        </div>
    )
}