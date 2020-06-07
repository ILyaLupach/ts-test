import React, { useState, useEffect }  from 'react';
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList';

import { ITodo } from '../interfaces';

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prev => [newTodo, ...prev]);
    }
    const toggleHandler = (id: number) => {
        setTodos(todos.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }
    const removeHandler = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='container'>
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </div>
    );
}

export default TodosPage;
