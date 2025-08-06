import { useState } from 'react'
import './App.css'

function App() {
  
  const [password , setPassword] = useState('');
  const [length , setLength] = useState(8);
  const [hasNumber , setHasNumber] = useState(false);
  const [hasSymbol , setHasSymbol] = useState(false);

  const generatePassword = () => {

  }

  const handleNumberChange = () => {

    setHasNumber(!hasNumber);
  }

  const handleSymbolChange = () => {

    setHasSymbol(!hasSymbol);
  }

  const handleLengthChange = (e) => {

    setLength(e.target.value)
  }

  return (
    <div>
      <h1>Password Generator</h1>
      <form >
        <div>
          {password}
        </div>

        <div>
          <label>Character Length</label>
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
