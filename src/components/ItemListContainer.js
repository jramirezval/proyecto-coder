import React from 'react'
import ItemCount from './ItemCount'

const ItemlistContainer = (props) => {

const handleCount=(cant) =>{

console.log(cant)
alert(`Ud a agregado ${cant} items al carrito`)
}



    return(

            <div>
                    <h1 className='SaludoLanding'>{props.greeting}</h1>
                    <ItemCount stock={5} initial={1} onAdd={handleCount} />
                   

            </div>
    )


}

export default ItemlistContainer