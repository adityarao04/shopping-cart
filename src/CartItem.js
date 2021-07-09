import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div styles={{fontsize:25}}>Phone</div>
                    <div styles={{color:"#777"}}>Rs 999</div>
                    <div styles={{color:"#777"}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/*buttons  */}
                        
                    </div>
                </div>
            </div>
        );
    }
}



const  styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:"#ccc"
    }
}

export default CartItem;