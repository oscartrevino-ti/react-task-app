import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
     const [value, setValue] = useState(task.task)

     const handleSubmit = e => {
        e.preventDefault();

         editTodo(value, task.id);

         setValue("")
     }
  return (
    <div className="edit-todo">
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='edit-todo-input' value={value}
        placeholder='Actualizar tarea' onChange={(e) => 
        setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'> 
          Actualizar tarea
        </button>
    </form>
    </div>

  )
}
