import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {products} from "./db/db";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Nav from "./components/nav";
import ParentList from "./pages/ParentList";
function App() {

 

  return (
    <>
    <BrowserRouter>
    <Nav products={products} />
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/parentlist" element={<ParentList products={products}/>}/>
    </Routes>
    </BrowserRouter>
      {/* <Home products={products} />
      <About />
      <Contact />
      <ParentList products={products}/> */}
      {/* <UseState/> */}
    </>
  );
}

export default App
