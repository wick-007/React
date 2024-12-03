import reactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <div className="flex justify-between bg-blue-950 h-20">
      <header className="flex align-middle">
        <img src={reactLogo} alt="react-logo" />
        <span className="font-bold text-sky-400">REACTFACTS</span>
        </header>
        <nav>
          <ul className="flex justify-around mr-4 ">
            <li className="mr-4 ">About</li>
            <li className="mr-4 ">Contact</li>
            <li className="mr-4 ">Pricing</li>
          </ul>
        </nav>
     
    </div>
  );
};
