// import React, { useState } from 'react';

const Todo = ({ todo }) => {
    // const [todos, setTodos] = useState([]);
    return (
        <div className={`border-4 border-green-400  rounded-xl p-4 m-4 md:m-0  shadow-2xl ${todo.completed? "border-freen-400" :"border-red-400"}`}>
            <h2 className='text-lg font-bold '>Name:{todo.todo}</h2>
            <p>{todo.completed ? "✅ Done" : "❌ Not Done"}</p>
            {/* <button className='btn btn-success mt-5'>Ststus</button> */}
        </div>
    );
};

export default Todo;



