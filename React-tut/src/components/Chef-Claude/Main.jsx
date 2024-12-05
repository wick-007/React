import { useState } from "react";

export default function Main() {
  // let [isGoingOut,setisGoingOut] = useState(true);
  let [IsImportant, setIsImportant] = useState("Add Ingredient");
  const [ingredients, setingredients] = useState([
    "chicken",
    "oregano",
    "Tomatoes",
  ]);
  const newIngredients = ingredients.map((ingredient) => {
    return <li key={ingredient}> {ingredient}</li>;
  });

  // const handleClickk = ()=>{
  //     return setisGoingOut((previsGoingOut) => !previsGoingOut);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    const formdata = new FormData(event.target);
    const newIngredient = formdata.get("ingredient");
    setingredients(() => [...ingredients, newIngredient]);
    console.log(ingredients);
  };

  const handleClick = () => {
    setIsImportant("Added");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder="e.g. oregano"
          className="border-2 w-80 m-2"
          name="ingredient"
        />
        <button
          onClick={handleClick}
          className="bg-black text-white w-44 rounded-lg "
        >
          {IsImportant}
        </button>
      </form>
      <ul className="list-disc ml-5">{newIngredients}</ul>
      {/* <button className="w-16 border-2 bg-green-700" onClick={handleClickk}>{isGoingOut?"yes":"No"}</button> */}
    </div>
  );
}
