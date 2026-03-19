
import { Suspense } from 'react'
import './App.css'
import Todos from './Components/Todos/Todos'

const fetchTodos = async () => {
  const res = await fetch('https://dummyjson.com/todos');
  return res.json();
}


function App() {

  const todospromise = fetchTodos();

  return (
    <>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner text-success w-16 h-16"></span>
          </div>
        }
      >
        <Todos todospromise={todospromise}></Todos>
      </Suspense>


    </>
  )
}

export default App
