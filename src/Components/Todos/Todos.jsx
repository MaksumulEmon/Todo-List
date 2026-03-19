import { use } from "react";
import Todo from "../Todo/Todo";


const Todos = ({todospromise}) => {
    const todosData = use(todospromise);
    const todos = todosData.todos

    console.log(todos);
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3'>
            {/* <h1 className='text-3xl'>Todos :{todos.length}</h1> */}
            {
              todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Todos;