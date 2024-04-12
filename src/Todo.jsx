import React, { useState } from 'react'
function Todo() {
    const [inputValue,setInputValue]=useState('')
    const [listValues,setlistValues]=useState([])

   const inputTarget = (event)=> {
        setInputValue(event.target.value)
    }

    const addInputValue =()=>{
        if(inputValue !== ''){
            setlistValues([...listValues,{id:Date(),text:inputValue}])
        }
        setInputValue('')
    }

    const deleteSelectValues = (id) => {
        const updateListValues = listValues.filter(list => list.id !== id)
        setlistValues(updateListValues)
    }
  return (
    <>
    <div>
        <h1>Todo List</h1>
        <div>
            <input type='text'  placeholder='add todo here....' value={inputValue} onChange={inputTarget}  />
            <button onClick={addInputValue}>Add</button>
 </div>

        <ul>
            {listValues.map((item)=>(
                <li>{item.id}<span>{item.text}</span><button onClick={() => deleteSelectValues(item.id)}>Delete</button></li>
            ))
            }
               
                </ul>
                </div>
        </>
  )
}

export default Todo