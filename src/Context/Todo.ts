import { createContext, useContext } from "react";

export interface todoType {
    id?: number,
    todo?: string,
    completed?: boolean
}

export interface TodoContextType {
    todos: todoType[],
    addTodo: (todo: todoType) => void,
    updateTodo: (id: number, todo: todoType) => void,
    deleteTodo: (id: number) => void,
    toggleComplete: (id: number) => void
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    updateTodo: () => { },
    deleteTodo: () => { },
    toggleComplete: () => { }

});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;