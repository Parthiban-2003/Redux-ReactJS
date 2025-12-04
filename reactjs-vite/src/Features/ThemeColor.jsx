import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "./ThemeColorSlice"; 

function ThemeColors() {
  let ColorsFromStore = useSelector((state) => state.Themes.value.color);
  let Dispatch = useDispatch();

  const [color, setColor] = useState("black"); 

 const handleColorChange = () => {
    Dispatch(Colors(color)); 
  };

  return (
    <>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)} 
      />
      <button onClick={handleColorChange}>Change Color</button>
    </>
  );
}

export default ThemeColors;
