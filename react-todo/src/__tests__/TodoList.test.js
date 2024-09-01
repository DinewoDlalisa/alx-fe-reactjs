import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'


test ('renders TodoList components', () =>{
    render(<TodoList/>);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add Task/i)). toBeInTheDocument();
    
});

test('allows users to add a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/Add new todo/i), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/Add Todo/i));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });


test ('allow users to toggle todo completion', ()=>{
    render(<TodoList/>);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem). toHaveStyle('text-decoration: none');
})


test('allow user to delete a task', ()=> {render(<TodoList/>);
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
})

export default TodoList.test