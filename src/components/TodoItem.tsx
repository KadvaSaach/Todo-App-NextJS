'use client'

import { useState } from "react";

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void,
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    const [message, setMessage] = useState('');


    return(
        <li className="flex gap-1 items-center">
            <input 
                id={id} 
                type="checkbox" 
                className="cursor-pointer peer" 
                defaultChecked={complete} 
                onChange={ e=> toggleTodo(id, e.target.checked) }/> 
            <label 
                htmlFor={id} 
                className="peer-checked:line-through peer-checked:text-slate-500"
            >
                {title}
            </label>
        </li>
    )
}
