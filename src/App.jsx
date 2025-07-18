import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import ParentList from "./pages/ParentList";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Detail from "./pages/Detail";
import CategoryList from "./pages/CategoryList";

function App() {
  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parentlist" element={<ParentList/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/category/:category" element={<CategoryList/>}/>
        <Route path="*" element={<NotFound />}/>

      </Route>
    )
  )
 

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App
