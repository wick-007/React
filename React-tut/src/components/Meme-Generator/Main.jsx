import { useEffect, useState } from "react";

export default function Main2() {
  let [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageurl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes,setAllMemes] = useState([])

 const getImage =()=>{
    const randomMeme = Math.floor(Math.random()*allMemes.length) 
    const randomImageUrl = allMemes[randomMeme].url 
    setMeme((prevMeme)=>({
        ...prevMeme,
        imageurl:randomImageUrl
        
    }))
    console.log(randomMeme)
 }


  useEffect(()=>{
    fetch("https://cors-anywhere.herokuapp.com/https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes))
  },[])

  const handleChange=(event)=>{
    const {value , name}= event.target 
    
    setMeme((prevMeme)=>(
       { ...prevMeme, [name]:value}))
    
  }

  return (
    <main>
      <div className="grid grid-cols-2 gap-[17px] mb-[17px]">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            className="w-full mt-1.5 rounded border border-[#D5D4D8] px-2"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            className="w-full mt-1.5 rounded border border-[#D5D4D8] px-2"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getImage} className="col-span-full rounded bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white border-none cursor-pointer h-10" >
          Get a new meme image 🖼
        </button >
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <img
          src={meme.imageurl}
          alt="Meme"
          className="max-w-full h-auto rounded-sm"
        />
        <span
          className="absolute top-0 text-center my-4 px-1.5 font-[impact] text-2xl uppercase text-white tracking-wide"
          style={{
            textShadow: `2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      0 2px 0 #000,
      2px 0 0 #000,
      0 -2px 0 #000,
      -2px 0 0 #000,
      2px 2px 5px #000`,
          }}
        >
          {meme.topText}
        </span>
        <span
          className="absolute bottom-0 text-center my-4 px-1.5 font-[impact] text-2xl uppercase text-white tracking-wide"
          style={{
            textshadow: ` 2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      0 2px 0 #000,
      2px 0 0 #000,
      0 -2px 0 #000,
      -2px 0 0 #000,
      2px 2px 5px #000`,
          }}
        >
          {meme.bottomText}
        </span>
      </div>
    </main>
  );
}



// // useEffect(()=>{
//     console.log("Effect function run")
// },[count])

// pure functions return the same output as the input
// side effect is what happens after react renders its componenets  like fectvhing an <Api></Api>
// saving a variable or data in local this.state.
// it runs the function after it has rendered its componenets or there is a change in componenets.Api
// dependecies array are what the function depends on whether to run or Notification.

// useEffect(()=>{
    // fetch("https....")
    // .then(reponse => reponse.json())
    //    .then(data => setStarWarsData(data))
    // },[])


    /* 
    const [show,setshow]=useState(true)
     const handleClick =()=>{
        setShow((prevShow)=>!prev show)
        }

        <button onClick={handleClick}>Toggle Windowtracker</button>
        {show ? <WindowTracker/> : null}


        select random from a list of array
        const arr=[7,6,5,4,2]

    */