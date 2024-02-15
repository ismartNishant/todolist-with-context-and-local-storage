import type { FC } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

interface HomeProps { }

const Home: FC<HomeProps> = () => {
    return (
        <div className='mx-auto dark:text-white min-h-[400px]'>
            <h1 className='text-center mb-5 text-4xl font-lobster text-pink-500 font-medium'>Manage Your Todos Here</h1>
            <div className='max-w-lg mx-auto bg-slate-100 dark:bg-zinc-900 p-5 shadow rounded-md'>

                <TodoForm />
                <TodoItem />
            </div>
        </div>
    );
}

export default Home;
