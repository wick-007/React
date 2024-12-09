export default function Recipe(){
    return(
        <div>
             <section className="m-4 p-1">
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
            </section>
        </div>
    )
}