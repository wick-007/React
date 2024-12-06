import { useState } from "react";

export default function Main() {
  // let [isGoingOut,setisGoingOut] = useState(true);
  //   let [IsImportant, setIsImportant] = useState("Add Ingredient");
  const [recipeShown,setrecipeShown] = useState(false)
  const [ingredients, setingredients] = useState(["yam","eggs","tomato","fish"]);
  const newIngredients = ingredients.map((ingredient) => {
    return <li key={ingredient}> {ingredient}</li>;
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

      {ingredients.length > 0 ? (
        <div>
          <div className="border-2 m-2 p-4">
            <h1 className="text-3xl font-semibold">Ingredients on hand:</h1>
            <ul className="list-disc ml-5">{newIngredients}</ul>
          </div>
        </div>
      ) : null}

      {ingredients.length > 3 ? (
        <div>
          <div className="border-2 bg-gray-200 p-2 m-4 rounded-lg ">
            <h2 className="text-2xl font-medium m-2">Ready for a recipe?</h2>
            <p className="p-2 m-1">
              Generate a recipe from your list of ingredients.
            </p>
            <button onClick={recipeClick} className="bg-orange-400 border-2 solid border-orange-600 text-white p-1 rounded-lg m-2">
              Get a recipe
            </button>
          </div>
        </div>
      ) : null}
        {recipeShown ? null : <section className="m-4 p-1">
            <h2 className="text-2xl">Chef Claude Recommend</h2>
            <p>based on the ingredients you have available, I would recommend a delicious <strong> Quick Noodle dish</strong>. Here is the recipe.</p>
            <h3 className="text-2xl">Noddle dish</h3>
            <strong className="">Ingredients</strong>
            <ul className="mb-2">
                <li> 2 packs of indomie </li> 
                <li> 1 packs of sausage </li> 
                <li> 2 spoons of pepper </li> 
                <li> 1 bulb of onion </li> 
                <li> 500lb of water </li> 
            </ul>
            <strong>Instructions</strong>
            <ol className="m-1 list-decimal">
                <li> Pour 500lb of water into bowl and put on fire</li>
                <li> Put the packs of indomie into the boiling water</li>
                <li> Add pepper</li>
                <li> Fry sausages</li>
                <li> Serve with eggs and orange juice</li>
            </ol>
        </section>}
    </div>
  );
}
