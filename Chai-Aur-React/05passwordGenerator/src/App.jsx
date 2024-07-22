import { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // const passwordGenerator = () => {}
  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "~!@#$%^&*()_+-={}/|.,\₹`[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);    
    }

    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword]);
  // }, [length, numberAllowed, characterAllowed, setPassword]);  // in this case it is continuously running or changing the password's value or it goes on infinite loop.

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // passwordGenerator();

  useEffect(() => {
    passwordGenerator()
    }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-600 bg-gray-800'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />

          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
            <label >Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={ () => { setNumberAllowed((prev) => !prev);  }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={characterAllowed} id='characterInput' onChange={ () => { setCharacterAllowed((prev) => !prev);  }} />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App;
