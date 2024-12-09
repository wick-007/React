import ReactMarkdown from "react-markdown"
export default function Recipe(props){
    return(
        <div>
          <ReactMarkdown>{props.recipe}</ReactMarkdown>  
        </div>
    )
}