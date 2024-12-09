import { useState } from "react"
import soundpad from "../../../soundpad"
import Pad from "./Pad"




export default function SoundPad(){
    // eslint-disable-next-line no-unused-vars
    let [pads,setPads] = useState(soundpad)
   


    
    const Padd = pads.map((pad)=>{
        return <Pad key={pad.id} color={pad.color} on={pad.on}/>
    })
   
    console.log(soundpad)

    
   

    return(
        <div>
          <h1 className="text-2xl m-1"> Sound Pads</h1>
          <div>{Padd}</div>
        </div>
    )
}