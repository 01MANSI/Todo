import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Sliderr from './Sliderr'


function App() {
  // const [count, setCount] = useState(0)
  // const increment= () => {
  //   setCount(count +1)
  // }
  // const decrement= () => {
  //   setCount(count -1)
  // }

  // const [count,setCount]=useState(5)
  // useEffect( () =>{
  //   setTimeout(() =>{
  //     setCount(count +1)
  //   },1000)
  //   // countIncrement(count +1)
    
  // })

  
  const [length,setLength] = useState(6)
  const [numberAllow,setNumberAllow] = useState(false)
   const [CharacterAllow,setCharacterAllow]= useState(false)
   const [password,setPassword] =useState("")

   useEffect(() =>{
     let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz"
     if(numberAllow){
       str += '123456789'
     }
    if (CharacterAllow){
     str += "!@#$%^&*"
   }

  for (let i=0;i<=length;i++){
     let char = Math.floor(Math.random() * str.length)
     pass += str[char]
   }
    setPassword(pass)
   },[numberAllow,CharacterAllow])
  
return (

    <>
     {/* <button onClick={increment}>increment</button>
     <h1>{count}</h1> 
     <button onClick={decrement}>decrement</button>
      <h3>{count}</h3>
     <h1 className="text-9xl font-bold underline italic text-red-700 h-48">
      Hello world!
    </h1> */}
    {/* <h1>i have rendered {count} times!</h1> */}

 <div className='main-div'>
  <h1>Password Generator</h1>
  <div className='input-box'>
    <input type='text' value={password} />
  </div>
  <div className='password-option'>
    <div className='number-allow'>
      <input type='checkbox' name='' id='numberAllow' defaultChecked={numberAllow} onChange={()=>{
        setNumberAllow((previous)=>!previous)
      }} />
      <label htmlFor='number'>Number</label>
    </div>
    <div className='special-char-allow'>
      <input type='checkbox' name='' id='characterAllow' defaultChecked={CharacterAllow}  onChange={()=>{
        setCharacterAllow((previous)=>!previous)
      }}/>
      <label htmlFor='character'>Character</label><br/><br/>
    </div>
  </div>
</div> 
   <Todo/>
   <Sliderr/>
    </>
  )
}


export default App
