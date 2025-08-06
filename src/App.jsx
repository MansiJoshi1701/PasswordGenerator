import { useState } from 'react'
import './App.css'

function App() {
  
  const [password , setPassword] = useState('');
  const [length , setLength] = useState(8);
  const [hasNumber , setHasNumber] = useState(false);
  const [hasSymbol , setHasSymbol] = useState(false);

  function getRandomIndex(min, max) {

    // Calculate the range size (inclusive of max)
    const range = max - min + 1;
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
    // Scale the random number to the desired range and add the minimum value
    return Math.floor(randomNumber * range) + min;

  }


  const generatePassword = (e) => {

    e.preventDefault();

    let alphas = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const nums = [0,1,2,3,4,5,6,7,8,9];
    const symbols = ['!','@','#','$','%','^','&','*'];

    let tempString = "";
    if(hasNumber) alphas = alphas.concat(nums);

    if(hasSymbol) alphas = alphas.concat(symbols);

    
    for(let i = 1 ; i <= length ; i++){

      //1. choose a random index
      const ind = getRandomIndex(0,alphas.length-1);

      tempString += alphas[ind];
    }

    setPassword(tempString);
    
  }

  const handleNumberChange = () => {

    setHasNumber(!hasNumber);
  }

  const handleSymbolChange = () => {

    setHasSymbol(!hasSymbol);
  }

  const handleLengthChange = (e) => {

    setLength(e.target.value);
  }

  return (
    <div>
      <h1>Password Generator</h1>
      <form onSubmit={e => generatePassword(e)}>
        <div>
          <span>Password: {password}</span>
        </div>

        <div>
          <label>Character Length : {length}</label>
          <input 
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={handleLengthChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={hasNumber}
              onChange={handleNumberChange}
            />
            Include Numbers
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={hasSymbol}
              onChange={handleSymbolChange}
            />
            Include Symbols
          </label>
        </div>

        <button>Submit</button>

      </form>

    </div>
  )
}

export default App
