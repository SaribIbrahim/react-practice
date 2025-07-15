import React from 'react'
import { useState } from 'react';



function UseState() {

    
    let [num,setNum]=useState(90);
    let [isDisabled,setIsDisabled]=useState(false);
    // let [count,setCount]=useState(0);
    let [text,setText]=useState("I am learning react");
    let [toggle,setToggle]=useState(true);

    function onClick(){
            const newNum = num - 6;
            setNum(newNum);
            
            if (newNum <= 0) {
              setIsDisabled(true);
            }
          
          
        // const newCount=count+1;
        // setCount(newCount);
        // if(newCount>=3){
        //     setIsDisabled(true);
        


        }
        function handleClick(){
            setToggle(!toggle);
        if(toggle){
            setText("React is fun");
        }
        else{
            setText("I am learning react");
        }
        }
        
    

    return (
        <>
            <p>{num}</p>
            <button onClick={onClick} disabled={isDisabled}>Click</button>
            <p>{text}</p>
            <button onClick={handleClick}>Change Text</button>



        </>
    )
}

export default UseState