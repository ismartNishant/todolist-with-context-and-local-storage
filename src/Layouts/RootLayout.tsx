import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Header from '../Components/Header'
import { ThemeProvider } from '../Context/Theme'
import { useState, useEffect } from 'react'
import { TodoProvider, todoType } from '../Context/Todo';


const RootLayout = () => {
  //functionality for theme
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
    document.body.style.backgroundColor = "#000001";
  };

  const darkTheme = () => {
    setThemeMode("dark");
    document.body.style.backgroundColor = "#fff";

  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);


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


    <ThemeProvider value={{ themeMode, lightTheme, darkTheme, setThemeMode }}>
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
        <div className=' relative'>
          <Header />

          <main className='p-5 sm:p-10 mx-auto'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </TodoProvider>
    </ThemeProvider>



  )
}

export default RootLayout
