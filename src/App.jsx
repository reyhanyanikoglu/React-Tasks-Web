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

  const editTaskById = (id,updatedTitle,uptadedTaskDesc) => { // task listesini dönücez bana güncellenecek id geliyor o id yi bulup değiştircez
    const uptadedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {id, title:updatedTitle, taskDesc:uptadedTaskDesc}
      }
      return task
    });
    setTasks(uptadedTasks)
  }

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskByID} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
