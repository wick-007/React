export default function IngredientList(props){
    return(
        <div>
            {props.ingredients.length > 0 ? (
        <div>
          <div className="border-2 m-2 p-4">
            <h1 className="text-3xl font-semibold">Ingredients on hand:</h1>
            <ul className="list-disc ml-5">{props.newIngredients}</ul>
          </div>
        </div>
      ) : null}

      {props.ingredients.length > 3 ? (
        <div>
          <div className="border-2 bg-gray-200 p-2 m-4 rounded-lg ">
            <h2 className="text-2xl font-medium m-2">Ready for a recipe?</h2>
            <p className="p-2 m-1">
              Generate a recipe from your list of ingredients.
            </p>
            <button onClick={props.click} className="bg-orange-400 border-2 solid border-orange-600 text-white p-1 rounded-lg m-2">
              Get a recipe
            </button>
          </div>
        </div>
      ) : null}
        </div>
    )
}