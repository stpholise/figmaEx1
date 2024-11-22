import {useState } from 'react'


const TodoList = () => {
    const [tasks, setTasks] = useState(['say a prayer',
        'read a book', 
        'go for a walk',
        'do some pushups',
        'drink water'
    ])
    const [newTask, setNewTask]  = useState('')
    
    function handleIputChange(e) {
        setNewTask(e.target.value)
    }

    function handleAddTask() {
        if (newTask === '') return
        if(newTask.trim === '') return
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    function handleDeleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)

    }
    
    function moveTaskUp(index) {
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

  return (
    <div className='toDoList'>
        <h1>To Doo List</h1>

        <div>
            <input 
                type="text"
                value={newTask}
                onChange={handleIputChange}
                placeholder='Enter a new task'
            />
            <button
                onClick={handleAddTask}
                className='addButton'
            >
                Add
            </button>
        </div>

        <ul>
            {tasks.map((task, index) =>(
                <li key={index}>
                    <span className="text"> {task}</span>
                    <button 
                        className='deleteBtn' 
                        onClick={() => handleDeleteTask(index)}
                    >
                        Delete
                    </button>
                    <button 
                        className='moveBtn' 
                        onClick={() => moveTaskUp(index)}
                    >
                        👆
                    </button>
                    <button 
                        className='moveBtn' 
                        onClick={() => moveTaskDown(index)}
                    >
                        👇
                    </button>
                </li>
            ))}
        </ul>
        
    </div>
  )
}

export default TodoList