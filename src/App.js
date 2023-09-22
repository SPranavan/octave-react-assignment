import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home';
import About from './Components/Pages/AboutUs';
import Contact from './Components/Pages/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
      </Route>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;