import { FC } from 'react';

interface TodoFormProps { }

const TodoForm: FC<TodoFormProps> = () => {
    return (
        <form className="flex mb-5">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border-2 border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"


            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-pink-500  text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
