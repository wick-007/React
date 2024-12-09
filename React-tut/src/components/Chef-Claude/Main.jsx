import { useState } from "react";
import Recipe from "./ChefClaude-Recipe";
import IngredientList from "./Ingredients-List";


export default function Main() {
  // let [isGoingOut,setisGoingOut] = useState(true);
  //   let [IsImportant, setIsImportant] = useState("Add Ingredient");
  const [recipeShown,setrecipeShown] = useState(true)
  const [ingredients, setingredients] = useState([]);
  const newIngredients = ingredients.map((ingredient,index) => {
    return <li key={index}> {ingredient}</li>;
  });

  // const handleClickk = ()=>{
  //     return setisGoingOut((previsGoingOut) => !previsGoingOut);
  // }

  const recipeClick=()=>{
    setrecipeShown((prevrecipeShown) => !prevrecipeShown)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    const formdata = new FormData(event.target);
    const newIngredient = formdata.get("ingredient");
    setingredients(() => [...ingredients, newIngredient]);
    console.log(ingredients);
    event.target.reset();
  };

  //   const handleClick = () => {
  //     setIsImportant("Added");
  //   };

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
          //   onClick={handleClick}
          className="bg-black text-white w-44 rounded-lg "
        >
          Add Ingredient
        </button>
      </form>
        <IngredientList ingredients={ingredients} newIngredients={newIngredients} click={recipeClick}/>
        {recipeShown ? null : <Recipe/>}
    </div>
  );
}
