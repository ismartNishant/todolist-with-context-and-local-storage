import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaTwitter, FaDiscord, FaDribbble } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-white border-y dark:border-0 dark:dark:bg-zinc-900  dark:text-white  ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 w-64 bg-red">
                        <Link to='/' className="text-2xl flex items-center font-bold uppercase" >
                        <span className="text-pink-500 pe-1">  Your </span> TODO
                        </Link>
                        <p className='mt-3 dark:text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicin cumque laudantium amet enim corrupti ab, beatae minima.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">Resources</h2>
                            <ul className="text-gray-500 font-medium dark:text-gray-400">
                                <Link to="/"  >
                                    <li className="mb-4 ">
                                        Home
                                    </li>
                                </Link>
                                <Link to="/about" >
                                    <li className='mb-4'>
                                        About
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-200">Follow us</h2>
                            <ul className="text-gray-500 font-medium dark:text-gray-400">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/ismartNishant"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <Link to="/discord" >
                                    <li >
                                        Discord
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-200 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium dark:text-gray-400">
                                <Link to="/" >
                                    <li className="mb-4 ">
                                        Privacy Policy
                                    </li>
                                </Link>
                                <Link to="/" >
                                    <li >
                                        Terms &amp; Conditions
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200  sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2024
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            Nishant Rajput
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="" className="text-gray-500 hover:text-pink-500">
                            <FaFacebookF size={20} />
                        </Link>
                        <Link to="" className="text-gray-500 hover:text-pink-500">
                            <FaDiscord size={20} />
                        </Link>
                        <Link to="" className="text-gray-500 hover:text-pink-500">
                            <FaTwitter size={20} />
                        </Link>
                        <Link to="" className="text-gray-500 hover:text-pink-500">
                            <FaGithub size={20} />
                        </Link>
                        <Link to="" className="text-gray-500 hover:text-pink-500">
                            <FaDribbble size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}