import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';

function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
        <Route index element={<Home todos={[]} />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
