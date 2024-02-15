import { FC } from 'react';

interface TodoItemProps { }

const TodoItem: FC<TodoItemProps> = () => {
    return (
        <div
            className={`flex border-2 bg-pink-100 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black "
        }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"

            />
            <input
                type="text"
                className={`border-2 px-2 border-pink-500 outline-none w-full bg-transparent rounded-lg `}

            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"


            >

            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"

            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
