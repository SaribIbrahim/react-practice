import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  
  let a=90;

  function handleClick(){
    a++;
    console.log(a);
    document.getElementById("p1").innerHTML=a;//this is used to update the value of the p tag
  }
  return (
    <>
    <Home/>
    <About/>
    <Contact/>
    <p id="p1">{a}</p> {/* this is used to display the value of the p tag. {} is used to display the value of the variable a */}
    <button onClick={handleClick}>click</button> {/* no () is used to call the function handleClick coz it executes the function before the button is clicked . treated like a callback function */}
    </>
  );
}

export default App
