import Rootlayout from "./components/Rootlayout";
import Home from "./components/Pages/Home";
import Activities from "./components/Pages/Activities";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Specials from "./components/Pages/Specials";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Rootlayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/activities" element={<Activities/>}/>
          <Route path="/Specials" element={<Specials/>}/>
          
        </Route>
      </Route>
    )
  );

  return (
    <>
     
       <RouterProvider router={router} />
    </>
  )
}

export default App
