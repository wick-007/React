import Contact from "./components/TravelPage/Contact";
import { TravelHeader } from "./components/TravelPage/TravelHeader";

function App() {
  return (
    <div>
      <TravelHeader />
      <div className="flex">
        <Contact
          img="../public/dog1.jpg"
          name="Bruno"
          phone="+00 6784 345"
          mail="bruno@mail.com"
        />
        <Contact
          img="../public/dog2.jpg"
          name="Gimenez"
          phone="+90 6784 345"
          mail="gim@mail.com"
        />
        <Contact
          img="../public/dog3.jpg"
          name="Raul"
          phone="+1 6784 345"
          mail="Raul@mail.com"
        />
        <Contact
          img="../public/dog4.jpg"
          name="Sanchez"
          phone="+233 6784 345"
          mail="Sanch@mail.com"
        />
      </div>
      <hr/>
    </div>
  );
}

export default App;
