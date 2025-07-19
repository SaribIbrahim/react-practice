import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import ParentList from "./pages/ParentList";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Detail from "./pages/Detail";
import CategoryList from "./pages/CategoryList";
import { getData,getDataById,getDataByCategory  } from "./components/homeloader"
import AddProducts from "./pages/AddProducts";
import TestProducts from "./pages/TestProducts";

function App() {
  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} loader={getData} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parentlist" element={<ParentList/>} loader={getData}/>
        <Route path="/product/:id" element={<Detail/>} loader={getDataById}/>
        <Route path="/category/:category" element={<CategoryList/>} loader={getDataByCategory}/>
        <Route path="/addproducts" element={<AddProducts/>}/>
        <Route path="/testproducts" element={<TestProducts/>}/>

        {/* Nested Routes */}
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
