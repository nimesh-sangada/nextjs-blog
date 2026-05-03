'use client'
import { useState, useEffect } from "react"
export default function TodoApp() {

    // Default empty array se shuru karo
    const [todos, setTodos] = useState([])

    // Browser load hone pe localStorage se lo
    useEffect(() => {
        const saved = localStorage.getItem('todos')
        if (saved) {
            setTodos(JSON.parse(saved))
        } else {
            // Pehli baar — default todos set karo
            setTodos([
                { id: 1, title: 'React seekhna', completed: false },
                { id: 2, title: 'Todo app banana', completed: false },
                { id: 3, title: 'Next.js seekhna', completed: false }
            ])
        }
    }, []) // Sirf ek baar — page load pe

    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        // step 1 input validaton
        if (inputValue.trim() == '') return

        //step 2 create new todo object
        const newTodo = {
            id: Date.now(),
            title: inputValue,
            completed: false
        }

        //step 3 new todo into Todolist of object
        setTodos([...todos, newTodo])

        //step 4 clear input value.
        setInputValue('')

    }
    const deleteTodo = (id) => {
        //step 1 filter todos array
        const updatedTodo = todos.filter(todo => todo.id !== id)
        //step 2 update new todos array object
        setTodos(updatedTodo)
    }
    const toggleTodo = (id) => {
        //direct update the completed value using Map
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        }))

    }
    const remaining = todos.filter(todo => !todo.completed).length


    useEffect(() => {
        document.title = remaining + " tasks remaining — Todo App"
    }, [remaining])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    return (
        <div className="container">
            {/* Input area */}
            <input type="text"
                name="task_name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your task...." />
            <button onClick={addTodo} className="btn btn-primary" type="button">Add</button>

            <br />
            <h3 className="heading">Todo Task List</h3>
            <div className="mt-2">

                <ul className="card">
                    {todos.map(todo => (
                        <li key={todo.id}
                            className={todo.completed ? 'completed' : ''}
                        >
                            <p onClick={() => toggleTodo(todo.id)}>{todo.title}</p>
                            <button onClick={() => deleteTodo(todo.id)} className="btn btn-secondary">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-2 card">
                <p>{remaining == 0 ? 'All task completed' : remaining + ' tasks remaining  '}</p>
            </div>
        </div>
    )
} 