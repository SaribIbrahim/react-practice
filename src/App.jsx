import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {products} from "./db/db";

function App() {

 

  return (
    <>
      <Home products={products} />
      <About />
      <Contact />
      {/* <UseState/> */}
    </>
  );
}

export default App
