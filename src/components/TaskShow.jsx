import React, { useState } from 'react'
import TaskCreate from './TaskCreate';

const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }
  const handleSubmit = (id,updatedTitle,uptadetTaskDesc) => { // güncelleme gerçekleşti
    setShowEdit(false);
    onUpdate(id,updatedTitle,uptadetTaskDesc)
  }

  return (
    <div className='task-show'>
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/> // eğer edite basılırsa taskformUpdate ye true döndürdük
    ) : (
        <>
          <h3 className='task-title'>Göreviniz:</h3>
          <p>{task.title}</p>
          <h3 className='task-title'>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className='delete-button'>Sil</button>
            <button onClick={handleEditClick} className='update-button'>Güncelle</button>
          </div>
        </>
        )
      }

    </div>
  )
}

export default TaskShow;