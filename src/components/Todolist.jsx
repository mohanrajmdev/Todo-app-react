import React from 'react';
import Todo from './Todo';

function Todolist({todolist,toogleComplete}) {
  return (
    <div className='p-2 text-left w-48 flex flex-row'>
        {todolist.map(todo => (
            <Todo key={todo} todo={todo} toogleComplete={toogleComplete} />
        ))}
    </div>
  )
}

export default Todolist;
