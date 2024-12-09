import trollFace from "../../../public/troll-face.png"

export default function Header1() {
    return (
        <header className="flex items-center h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3] text-white px-5">
            <img className="h-full mr-2"
                src={trollFace} 
            />
            <h1 className="text-lg mr-auto">Meme Generator</h1>
        </header>
    )
}