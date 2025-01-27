import { useState } from "react";
import Header from "./component/Header"
import UserInput from "./component/UserInput"
import Results from "./component/Results";

function App() {
const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  setUserInput(previousUserInput => {
      return {
          ...previousUserInput,
          [inputIdentifier]: +newValue //by adding the + we force it to transform from strong to number
      }
  });
}

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Entre a duration greater than zero</p>}
    {inputIsValid && <Results userInput={userInput}/>}
    </>
)}

export default App
