/* eslint-disable react/prop-types */
export function Jokes({setup,punchline}){
    return(
        <div>
            <div className="p-5 border-2 border-green-300 w-80 rounded-md m-4 shadow-2xl bg-slate-100">
                {setup ? <h1>Setup:{setup}</h1> : ""}
                <p>Punchline:{punchline}</p>
            </div>
        </div>
    )
}