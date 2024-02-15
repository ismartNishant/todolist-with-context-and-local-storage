import { useState } from 'react';
import { useTodo } from '../../Context/Todo';
import { todoType } from '../../Context/Todo'; // Import the todoType interface
import { BiTrash } from 'react-icons/bi';
import { FaPen , FaFile} from 'react-icons/fa6';
interface TodoItemProps {
  todo: todoType; // Define the type for the todo prop
}

function TodoItem({ todo }: TodoItemProps) { // Use the TodoItemProps interface
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    if (todo.id !== undefined) { // Ensure todo.id is defined
      updateTodo(todo.id, { ...todo, todo: todoMsg });
      setIsTodoEditable(false);
    }
  };

  const toggleCompleted = () => {
    if (todo.id !== undefined) { // Ensure todo.id is defined
      toggleComplete(todo.id);
    }
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-green-200 dark:bg-green-200/90" : "bg-pink-100 dark:bg-pink-100/90"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 dark:text-white dark:bg-zinc-900 dark:hover:text-pink-500 hover:text-pink-500 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <FaFile size={15} /> : <FaPen size={15} />}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 dark:text-white dark:bg-zinc-900 dark:hover:text-pink-500 hover:text-pink-500 shrink-0"
        onClick={() => {
          if (todo.id !== undefined) { // Ensure todo.id is defined
            deleteTodo(todo.id);
          }
        }}
      >
        <BiTrash size={20} className='' />
      </button>
    </div>
  );
}

export default TodoItem;
