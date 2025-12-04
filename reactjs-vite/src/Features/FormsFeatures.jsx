import { useDispatch, useSelector } from "react-redux";
import { Login, LogOut } from "./SliceContent";
import { useState } from "react";

function FormsFeatures() {
  let Selectors = useSelector((state) => state.FromContent.value);
  let Dispatch = useDispatch();
  
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  function LoginHandle() {
    Dispatch(Login({
      name: name,
      age: age,
      email: email,
    }));

    setAge(0);
    setEmail("");
    setName("");
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      /><br/>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      /><br/>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      /><br/>

      {
        !Selectors.name ? 
          <button onClick={LoginHandle}>Login</button> 
        :
          <button onClick={() => Dispatch(LogOut())}>Logout</button>
      }
    </>
  );
}

export default FormsFeatures;
