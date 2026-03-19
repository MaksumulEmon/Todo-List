import React from 'react';

const Todo = ({ todo }) => {
    return (
        <div className='border-4 border-green-600  rounded-xl p-4 m-4 md:m-0'>
            <h2 className='text-lg font-bold '>Name:{todo.todo}</h2>
            <p>{todo.completed ? "✅ Done" : "❌ Not Done"}</p>
        </div>
    );
};

export default Todo;