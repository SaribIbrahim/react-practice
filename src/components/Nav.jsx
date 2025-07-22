import React from 'react'
import {Link,NavLink} from "react-router-dom";
import Modal from './Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deposit } from '../features/deposit/depositSlice';


function Nav({products}) {
    
    let [showModal,setShowModal] = useState(false);
    let handleClick=()=>{
        if(showModal){
            setShowModal(false);
        }else{
            setShowModal(true);
        }
    }

    const {depAmount}=useSelector((state)=>state.rootReducer);

    const dispatch = useDispatch();
    const Deposit=()=>{
       dispatch(deposit(20))
    }
    


    
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={"/about"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/parentlist"}>ParentList</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/addproducts"}>AddProducts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/testproducts"}>TestProducts</NavLink>
                            </li>
                            <li><button onClick={Deposit}>Deposit ${depAmount.value}</button></li>
                            <li>
                            <strong className='text-danger'>{products.length}</strong>
                            </li>
                            
                        </ul>
                        <ul>
                           <button className="btn btn-info  " onClick={handleClick} >Sign In</button>   
                              
                        </ul>
                        
                        




                    </div>
                </div>
            </nav>
            { showModal?<Modal handleClick={handleClick}/>:null}
        </>
    )
}

export default Nav