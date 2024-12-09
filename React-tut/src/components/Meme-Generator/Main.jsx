export default function Main2() {
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
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            className="w-full mt-1.5 rounded border border-[#D5D4D8] px-2"
          />
        </label>
        <button className="col-span-full rounded bg-gradient-to-r from-[#711F8D] to-[#A818DA] text-white border-none cursor-pointer h-10">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative flex flex-col justify-center items-center">
        <img
          src="http://i.imgflip.com/1bij.jpg"
          alt="Meme"
          className="max-w-full h-auto rounded-sm"
        />
        <span
          className="absolute top-0 text-center my-4 px-1.5 font-[impact] text-2xl uppercase text-white tracking-wide"
          style={{textShadow: 
      `2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      0 2px 0 #000,
      2px 0 0 #000,
      0 -2px 0 #000,
      -2px 0 0 #000,
      2px 2px 5px #000`}}
        >
          One does not simply
        </span>
        <span
          className="absolute bottom-0 text-center my-4 px-1.5 font-[impact] text-2xl uppercase text-white tracking-wide"
          style={{textshadow: 
     ` 2px 2px 0 #000,
      -2px -2px 0 #000,
      2px -2px 0 #000,
      -2px 2px 0 #000,
      0 2px 0 #000,
      2px 0 0 #000,
      0 -2px 0 #000,
      -2px 0 0 #000,
      2px 2px 5px #000`}}
        >
          Walk into Mordor
        </span>
      </div>
    </main>
  );
}
