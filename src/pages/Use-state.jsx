// import React from 'react'
// import { useState } from 'react';



// function UseState() {

    
//     // let [num,setNum]=useState(90);
//     // let [isDisabled,setIsDisabled]=useState(false);
//     // let [count,setCount]=useState(0);
//     let [text,setText]=useState("I am learning react");
//     let [toggle,setToggle]=useState(true);
//     let [prod,setProd]=useState({
//         name:"Apple",
//         price:100,
//         quantity:10
//     });

//     function onClick(){
//             // const newNum = num - 6;
//             // setNum(newNum);
            
//             // if (newNum <= 0) {
//             //   setIsDisabled(true);
//             // }
          
          
//         // const newCount=count+1;
//         // setCount(newCount);
//         // if(newCount>=3){
//         //     setIsDisabled(true);
//         setProd({...prod,price:300});// prod:prod.price=300 will mutate the original state

        
        


//         }
//         function handleClick(){
//             setToggle(!toggle);
//         if(toggle){
//             setText("React is fun");
//         }
//         else{
//             setText("I am learning react");
//         }
//         }
        
    

//     return (
//         <>
//             {/* <p>{num}</p>
//             <button onClick={onClick} disabled={isDisabled}>Click</button> */}
//             <p>{text}</p>
//             <button onClick={handleClick}>Change Text</button>
//             <h1>{prod.name}</h1>
//             <h1>${prod.price}</h1>
//             <h1>{prod.quantity}</h1>
//             <button onClick={onClick}>Update Price</button>




//         </>
//     )
// }

// export default UseState