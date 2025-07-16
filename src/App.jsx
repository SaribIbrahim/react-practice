import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {products} from "./db/db";
import ParentList from "./pages/ParentList";
function App() {

 

  return (
    <>
      <Home products={products} />
      <About />
      <Contact />
      <ParentList products={products}/>
      {/* <UseState/> */}
    </>
  );
}

export default App
