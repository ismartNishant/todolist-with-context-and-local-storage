import { FC } from 'react';
import useTheme from '../Context/Theme';
import { FaSun, FaMoon } from 'react-icons/fa6';
interface ThemeBtnProps { }

const ThemeBtn: FC<ThemeBtnProps> = () => {

    const { themeMode, lightTheme, darkTheme, setThemeMode } = useTheme();

    return (

        <div className={` flex items-center   rounded-full`}>
            <div className='flex gap-3 items-center '>
                {themeMode === "light" ? (
                    <div className="group  flex justify-center relative items-center">
                        <button className='p-2 rounded-full animate-spin bg-yellow-300 hover:bg-orange-400'
                            onClick={() => {
                                lightTheme();

                                setThemeMode("dark")
                            }}>
                            <FaSun size={25} />
                        </button>
                        <span className="absolute w-28  top-12  scale-0 transition-all rounded bg-sky-100 p-2 text-xs text-black group-hover:scale-100">✨ Light Mode!</span>
                    </div>
                ) : (
                    <div className="group  flex justify-center relative items-center">
                        <button className='p-2 rounded-full dark:bg-white dark:text-sky-400  dark:hover:text-yellow-400'
                         
                            onClick={() => {
                                darkTheme();
                               
                                setThemeMode("light")
                            }}>
                            <FaMoon size={25} />
                        </button>
                        <span className="absolute w-28 top-12  scale-0 transition-all rounded dark:bg-gray-800 dark:text-white p-2 text-xs text-black group-hover:scale-100">🌙 Dark Mode!</span>
                    </div>)}



            </div>
        </div>
    );
}

export default ThemeBtn;
