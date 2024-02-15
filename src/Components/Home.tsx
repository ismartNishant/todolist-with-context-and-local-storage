import type { FC } from 'react';
import TodoForm from './TodoCoponents/TodoForm';
import TodoItem from './TodoCoponents/TodoItem';
import { todoType } from '../Context/Todo';
interface HomeProps {
    todos: todoType[];
  }

const Home: FC<HomeProps>  = ({todos}) => {
    return (
        <div className='mx-auto dark:text-white min-h-[600px] sm:min-h-[600px] '>
            <h1 className='text-center my-10 text-3xl sm:text-4xl font-lobster text-pink-500 font-medium'>Manage Your Todos Here</h1>
            <div className='max-w-xl mx-auto bg-slate-100 dark:bg-zinc-900 p-3 sm:p-10 shadow rounded-md'>
                <div className="mb-4">
                    {/* Todo form goes here */}
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {todos.length > 0 ? (
                        todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))
                    ) : (
                        <div>
                            <h1 className="text-3xl text-pink-500 text-center font-medium uppercase">
                                Currently There are no Todos
                            </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
