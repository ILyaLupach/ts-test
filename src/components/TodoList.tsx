import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    if (todos.length === 0) {
        return (
            <p className='center'>Пока дел нет!</p>
        )
    }
    return (
        <ul>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={todo.completed ? 'todo completed' : 'todo'}
                >
                    <label>
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                        <span>
                            {todo.title}
                        </span>
                        <i
                            className='material-icons red-text'
                            onClick={() => onRemove(todo.id)}
                        >
                            delete
                        </i>
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
