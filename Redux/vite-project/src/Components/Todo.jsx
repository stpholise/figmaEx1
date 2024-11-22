import { useSelector, useDispatch } from 'react-redux'
import { makeNewTodo, addNewTodo, todoCheckedContent } from './store'


const Todo = () => {

    const dispatch = useDispatch();
    const todoContent = useSelector(state => state.todoContent);
     const newTodo = useSelector(state => state.newTodo);

    const handleChange = (e) => {
        
        dispatch(makeNewTodo(e.target.value))
    }

    const addTodoItem = () => {
        dispatch(addNewTodo(newTodo.title))
    }

  return (
    <>

        <h1>Todo</h1>
        <div className="card">
          <p>
            Edit <code>src/Components/Todo.jsx</code> and save to test HMR

            {newTodo.title}
          </p>
        </div>

        <input 
            type="text"  
            value={newTodo.title}
            onChange={handleChange}
        />


        <button onClick={addTodoItem}> add </button>

        {
            todoContent.map((todo, index) => (
                <div key={index}>
                    <h4>{todo.title}</h4>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={(e) => dispatch(todoCheckedContent({index, checked: e.target.checked}))}
                    />
                </div>
            ))
        }
    </>
  )
}

export default Todo