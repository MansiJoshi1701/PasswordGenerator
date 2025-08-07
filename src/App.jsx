import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [password , setPassword] = useState('');
  const [length , setLength] = useState(8);
  const [hasNumber , setHasNumber] = useState(false);
  const [hasSymbol , setHasSymbol] = useState(false);
  const [copied, setCopied] = useState(false);


  function getRandomIndex(min, max) {

    // Calculate the range size (inclusive of max)
    const range = max - min + 1;
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
    // Scale the random number to the desired range and add the minimum value
    return Math.floor(randomNumber * range) + min;

  }


  const generatePassword = () => {

    const alphas = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    const nums = [0,1,2,3,4,5,6,7,8,9];
    const symbols = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']',':',';','/','?','>','<','~','`','+','=','-','_','"'];


    let charSet = [...alphas];
    if(hasNumber) charSet = charSet.concat(nums);
    if(hasSymbol) charSet = charSet.concat(symbols);


    let tempString = "";
    for(let i = 1 ; i <= length ; i++){

      //1. choose a random index
      const ind = getRandomIndex(0,charSet.length-1);
      tempString += charSet[ind];
    }

    setPassword(tempString);
    
  }

  // useEffect hook to generate a new password whenever any of options change
  useEffect(() => {
    generatePassword();
  }, [length,hasNumber,hasSymbol])


  // Function to handle copying the password to the clipboard
    const handleCopy = (e) => {

    }


 


  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 font-sans p-4">
      <div className="bg-zinc-800 text-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-zinc-100">Password Generator</h1>
      
        {/* Password display area */}
        <div className="mb-6 flex items-center justify-between gap-2">
          <span className="flex-1 bg-zinc-700 text-zinc-200 text-lg p-3 rounded-lg font-mono truncate">
            {password}
          </span>

          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-lg transition-colors duration-200 shadow-md transform hover:scale-105"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>


        {/* Options and settings */}
        <div className="space-y-5">
          {/* Character length slider */}
          <div className="flex flex-col">
            <label className="text-zinc-400 mb-2">Character Length : {length}</label>
            <input 
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={e => setLength(Number(e.target.value))}
              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Checkbox for numbers */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={hasNumber}
              onChange={() => setHasNumber(!hasNumber)}
              className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 text-zinc-300">
              Include Numbers
            </label>
          </div>

          {/* Checkbox for symbols */}
          <div>
            <input
              type="checkbox"
              checked={hasSymbol}
              onChange={() => setHasSymbol(!hasSymbol)}
              className="h-5 w-5 rounded text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 text-zinc-300">
              Include Symbols
            </label>
          </div>

          {/* <button
            onClick={generatePassword}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors duration-200 shadow-md transform hover:scale-105"
          >
            Submit
          </button> */}

        </div>
      </div>
    </div>
  )
}

export default App
