import { useState } from 'react'
import './App.css'
import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"

function App() {

  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => { // child componentten gelen değerleri parenta geçtik
    const createdTasks = [
      ...tasks, { // spread operatörü
        id:Math.round(Math.random()*999999),
        title,
        taskDesc
      }
    ]
    setTasks(createdTasks);
  }

  const deleteTaskByID = (id) => { // id ye sahip olanı arrayden çıkar
      const updatedTasks = tasks.filter((task) => task.id !== id); // id silinmeyecekleri filtreler
      setTasks(updatedTasks);
  }

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskByID}/>
    </div>
  )
}

export default App
