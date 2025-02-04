import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = Object.values(userInput).every(value => value > 0);
  
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue  // the "+" sign is used to convert the string to a number
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className='center'>Please enter valid input</p>}
      {inputIsValid && <Results input={userInput} />}
      {/* {inputIsValid ? <Results input={userInput} /> : <p>Please enter valid input</p>} */}
    </div>
  )
}

export default App