import { FC, useState } from 'react';
import { useTodo } from '../../Context/Todo';

interface TodoFormProps { }

const TodoForm: FC<TodoFormProps> = () => {
    const { addTodo } = useTodo();

    const [todo, setTodo] = useState<string>("");

    const add = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo("")
    }


    return (
        <form className="flex mb-5" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border-2 border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                 value={todo}
                 onChange={(e) => setTodo(e.target.value) }
            />

            <button type="submit"  className="rounded-r-lg px-3 py-1 bg-pink-500  text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
