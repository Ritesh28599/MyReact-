import React, { useState } from 'react'

const Todo = () => {
  const [first, setfirst] = useState('');
  const [todo, settodo] = useState([]);
  const [EditMode, setEditMode] = useState(false);
  const [EditId, setEditId] = useState(null);
  const [Editvalue, setEditvalue] = useState('');




  const saveHandler =(e)=>{
e.preventDefault()
if(first.trim() !== ''){
  const newtodo ={
    id: new Date().getTime(),
    text: first

  }
  settodo([...todo,newtodo])
  setfirst('')
}
  }
  const DelHandler=(id)=>{
   const del= todo.filter((todo)=>todo.id !== id);
   settodo(del)
  }
   const EditHandler=(id,text)=>{
    setEditMode(true);
    setEditId(id);
    setEditvalue(text);

   }
   const UpdateHandler =()=>{
    const upd = todo.map((todo)=>{
      if(todo.id === EditId){
        return {...todo,text:Editvalue}
      }return todo;
   
    
    })
    settodo(upd)
    setEditMode(false);
    setEditId(null);
    setEditvalue('text');

   }
  
   
  return (
    <div>
      <h1>Todo_App</h1>
      <input type='text' value={first} onChange={(e)=>setfirst(e.target.value)}/>
      {
      EditMode ?  (
        <div>
          <input type='text' value={Editvalue} onChange={(e)=>setEditvalue(e.target.value)}/>
            <button onClick={UpdateHandler}>Update</button>
        </div>
        
      ):
      (<button onClick={saveHandler}>Save</button>)
      }
      
      <ul>
        {todo.map((todo)=>(<li key={todo.id}>{todo.text}
        <button onClick={()=>DelHandler(todo.id)}>Delete</button>
        <button onClick={()=>EditHandler(todo.id,todo.text)}>EDit</button>
        </li>))}
      </ul>
    </div>
  )
}

export default Todo
