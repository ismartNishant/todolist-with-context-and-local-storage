import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { TodoProvider } from '../Context/Todo';
import { todoType } from '../Context/Todo';

interface TodoLayoutProps { }

const TodoLayout: React.FC<TodoLayoutProps> = () => {

    const [todos, setTodos] = useState<todoType[]>([{
        id: 1,
        todo: "wake up at 8 AM",
        completed: false
    }]);


    const addTodo = (todo: todoType) => {
        setTodos((oldTodos) => [{ ...todo, id: Date.now() }, ...oldTodos]);
    };

    const updateTodo = (id: number, todo: todoType) => {
        setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)));
    };

    const deleteTodo = (id: number) => {
        setTodos((oldTodo) => oldTodo.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id: number) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
            )
        );
    };

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="relative">
                <Header />
                <main className="p-5 sm:p-10 mx-auto">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </TodoProvider>
    );
};

export default TodoLayout;
