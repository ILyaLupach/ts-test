import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key !== 'Enter' || !title.length) return
        onAdd(title)
        setTitle('')
    }

    return (
        <div className='input-field mt2'>
            <input
                value={title}
                onChange={changeHandler}
                type='text'
                id='title'
                placeholder='Введите новое дело...'
                onKeyPress={keyPressHandler}
            />
            <label htmlFor='title' className='active'>
                Введите новое дело
            </label>
        </div>
    );
}

export default TodoForm;
