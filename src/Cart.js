import React, { Component } from 'react'
import CartItem from './CartItem';
export default class Cart extends Component {
    render() {

        const arr = [1,2,3,4,5];
        return (
            <div className="cart">
                {
             arr.map((item) => {
                return item + 5;
             })
            }
            </div>
        )
    }
}
