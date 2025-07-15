import React from 'react'
import { useState } from 'react';



function UseState() {

    
    let [num,setNum]=useState(90);
    let [isDisabled,setIsDisabled]=useState(false);

    function onClick(){
        if(num>0){
            setNum(num-6);
        }
        if(num<=0){
            setIsDisabled(true);
        }
    }

    return (
        <>
            <p>{num}</p>
            <button onClick={onClick} disabled={isDisabled}>Click</button>

        </>
    )
}

export default UseState