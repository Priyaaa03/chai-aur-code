import { useState, useCallback, useEffect, useRef  } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(characterAllowed){
      str+="!@#$%&*~^"
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+= str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    //using ref to show the selected part for optimised UI
    passwordRef.current?.select();
    navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, characterAllowed, numberAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

    <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type='text'
      value={password}
      placeholder='password'
      className='outline-none w-full py-1 px-3 my-2 rounded-sm'
      readOnly 
      ref={passwordRef}
      
      />

      <button 
      className='outline-none bg-blue-600 py-1 px-3 my-2 mx-2 rounded-sm shrink-0 text-white'
      onClick={copyPasswordToClipboard}>
        Copy
      </button>
      
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={100} 
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />

          <label className='text-white'> Length: {length} </label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}/>
        <label htmlFor='numberInput'>Numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input
        type="checkbox"
        defaultChecked={characterAllowed}
        id="characterInput"
        onChange={() => {
          setCharacterAllowed((prev) => !prev);
        }}/>
        <label htmlFor='characterInput'>Characters</label>
      </div>
    </div>

    </div>
    </>
  )
}

export default App
