import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {products} from "./db/db";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import ParentList from "./pages/ParentList";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import Detail from "./pages/Detail";

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout products={products} />}>
        <Route index element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parentlist" element={<ParentList products={products}/>}/>
        <Route path="/product/:id" element={<Detail products={products}/>}/>
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
