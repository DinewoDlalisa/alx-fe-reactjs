import React,{useState} from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Build Todo App', completed: false}
    ]);

    const [newTodo, setNewTodo] = useState('');
    const handleAddTodo = ()=> {
        if (newTodo.trim()){
            setTodos([...todos, {id: Date.now(), text: newTodo, completed: false}]);
            setNewTodo('');
        };

        const handleToggleComplete = (id) => {
            setTodos(todos.map(todo =>
                todo.id = id ? { ...todo, completed: !todo.completed}: todo
            ));
        };

        const handleDeteTodo =(id) => {
            setTodos(todos.filter(todo => todo.id != id));
        }

        return (
            <div>
                <h1> Todo List</h1>
                <input type='text' value={newTodo} onChange={(element)=> setNewTodo(e.target.value)} placeholder='Add Task'/>
                <button onClick={handleAddTodo}>Add Todo</button>
                <ul>
                    {todos.map(todo=> (
                        <li key={todo.id} style={{ textDecoration: todo.completed? 'line-through' : 'none'}} onClick={()=> handleToggleComplete(todo.id)}> {todo.text}
                            <button onClick={() => handleDeteTodo(todo.id)}>Delete</button>
                        </li>
                        
                    ))}
                </ul>
            </div>
        );
    }
}



export default TodoList;