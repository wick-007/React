import { useState } from "react";

export default function Pad(props) {
    let [pressed, setPressed] = useState(props.on);
  const styles = {
    backgroundColor: pressed ? props.color : "black",
  };

 

  const clicked = () => {
    setPressed((prevpressed) => {
      const newPress = !prevpressed;
      console.log(newPress);
      return newPress;
    });
  };

  return (
    <>
      <button
        onClick={clicked}
        style={styles}
        className="border-2 solid border-purple-500 w-36 p-2 m-1"
      >
        {pressed}
      </button>
    </>
  );
}

//{styles} is needed to be called in jsx elements to style to pass props decorations.
