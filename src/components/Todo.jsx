import React from 'react';

function Todo({todo,toogleComplete}) {
  return (
    <div className='container place-content-start bg-slate-500 border-r-2 p-1 m-2'>
      <label className='flex flex-auto flex-row space-x-2'>
      <input type='checkbox' checked={todo.complete} className=' space-x-2 text-3xl' onChange={()=>{
        toogleComplete(todo.id)
      }}/>
      <h1 className='text-lg font-bold'>{todo.desc}</h1>
      </label>
    </div>
  )
};

export default Todo;