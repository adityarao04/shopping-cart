import React, { Component } from 'react';


class CartItem extends Component {
    
    constructor(){
        // call super() to call contructor of parent class
        super();
        this.state = {
            price:999,
            title:'iPhone',
            qty: 1,
            img:''
        }
    }
    render() {
        const{price,title,qty,img} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div styles={{fontsize:25}}>{title}</div>
                    <div styles={{color:"#777"}}>Rs {price}</div>
                    <div styles={{color:"#777"}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons  */}
                    <img src="https://image.flaticon.com/icons/png/512/992/992651.png" alt="increase" className="action-icons"/>
                    <img src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="decrease" className="action-icons"/>        
                    <img src="https://image.flaticon.com/icons/png/512/3096/3096673.png" alt="delete" className="action-icons"/>    
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