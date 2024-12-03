import reactLogo from "../assets/react.svg";

export const Header = () => {
    return (
       <header className="flex justify-between"> 
      <img src={reactLogo}  alt="react-logo"/>
      <nav>
        <ul className="flex justify-around mr-4 " >
          <li className="mr-4 ">About</li>
          <li className="mr-4 ">Contact</li>
          <li className="mr-4 ">Pricing</li>
        </ul>
      </nav>
      </header>
    )
  }
  