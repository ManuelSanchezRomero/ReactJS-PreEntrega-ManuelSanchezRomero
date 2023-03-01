import React from 'react';

const CartWidget = () =>{
    return(
        <div className='cart'>
        <box-icon name='cart'></box-icon>
            <span className='item___total'>0</span>
        </div>
    )
}

export default CartWidget