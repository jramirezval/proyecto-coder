import React, {useState} from 'react'
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

function ItemCount({initial, stock, onAdd}) {
    
    const [cantidad, setCantidad] = useState(initial)
   
   
   
    const handleAdd=()=>
{

    if (cantidad<stock){

        setCantidad(cantidad+1)
    }

}    
    

const handleRemove=()=>{

    if (cantidad>initial){

        setCantidad(cantidad-1)

}

}

    return (
        <>

<div className= "card text-center w-50">

        <div className="card-header">
            <h1> Soy el item count </h1>
        </div>
    
       <div className="card-body">


        <button onClick={handleAdd}><CgMathPlus/></button>
        <label className="alert alert-white"> Cantidad {cantidad}</label>
        <button onClick={handleRemove}><CgMathMinus/></button>
        <button className="btn btn-primary btn-block" onClick={()=>onAdd(cantidad)} >Añadir  <FiShoppingCart/></button>

       </div>
       
       </div>
       </>
    
    )


}

export default ItemCount
