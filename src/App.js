import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {AiOutlinePlus,AiOutlineDelete} from 'react-icons/ai';
import Todolist from './components/Todolist';
import { useState ,useRef } from 'react';

function App() {
  const [todoList,setTodoList]=useState([]);
  const inputRef=useRef();

  const addElement = (e)=>{
    e.preventDefault();
    const val=inputRef.current.value;
    let preTodo=[...todoList];
    preTodo.push({id:uuidv4() ,desc : val,complete : false});
    console.log(preTodo);
    setTodoList(preTodo);
    inputRef.current.value='';
  };

  const toogleComplete=(id)=>{
    const temTodo=[...todoList];
    const todoElem=temTodo.find(todo => todo.id===id);
    todoElem.complete=!todoElem.complete;
    setTodoList(temTodo);
    console.log(todoElem);
  }
  
  const deleteItem= (e) =>{
    e.preventDefault();
    const temTodo=[...todoList];
    const editTodo=temTodo.filter(todo => !todo.complete);
    setTodoList(editTodo);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Learn React App By Doing Todo-App</h1>
      </header>
      <div className="App-body">
        <div className="App-container">
          <h1 className=' text-2xl font-bold text-emerald-400  inline-block align-middle hover:align-text-bottom uppercase'>Todo App</h1>
          <form className='flex justify-between'>
            <input className='text-left indent-2 border w-full text-xl text-black' type="text" ref={inputRef} placeholder='Add Todo'/>
            <button className='border p-2 ml-2 bg-slate-900 text-slate-50' onClick={addElement}><AiOutlinePlus  size={20}/></button>
            <button className='border p-2 ml-2 bg-red-600 text-slate-50' onClick={deleteItem}><AiOutlineDelete size={20}/></button>
          </form>
          <Todolist todolist={todoList} toogleComplete={toogleComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;
