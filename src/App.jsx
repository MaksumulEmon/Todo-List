
import { Suspense } from 'react'
import './App.css'
import Todos from './Components/Todos/Todos'

const fetchTodos = async () => {
  const res = await fetch('https://dummyjson.com/todos');
  return res.json();
}


function App() {

const todospromise =fetchTodos();

  return (
    <>

      <Suspense fallback={<h1>Loading  .......</h1>}>
        <Todos todospromise ={todospromise}></Todos>
      </Suspense>


    </>
  )
}

export default App
