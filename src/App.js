import React,{ Component} from 'react';
import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends Component  {




  constructor(){
        // call super() to call contructor of parent class
        super();
        this.state = {
            products: [
               {
                price:99,
                title:'Watch',
                qty: 1,
                id:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4_FM4nq-qTxzPCwbUqn1EJP81BPucUuKqIX9GNUaLdG0OqQtMwuFNoy34FuRowuSoz-MvAxK&usqp=CAc'
               } ,
               {
                price:999,
                title:'Mobile Phone',
                qty: 1,
                id:2,
                img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000'
               } ,
               {
                price:2999,
                title:'Laptop',
                qty: 4,
                id:3,
                img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672874000'
               } 
            ],
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }

   handleIncreaseQuantity= (product)=>{
      //  console.log("Increase Qty of ",product);
       const {products} = this.state;

       const index = products.indexOf(product);

       products[index].qty += 1; 

       this.setState({
         products : products
       });
   }



   handleDecreaseQuantity= (product)=>{
       
      //  console.log("Hey decrese the qty",product);

       const {products} = this.state;

       const index = products.indexOf(product);
       if(products[index].qty === 0){return;}

       products[index].qty -= 1;

       this.setState({
        //    products : products
        // short hand property 
         products
       })
   }


   handleDeleteProduct = (id)=>{
       const {products} = this.state;

       const items = products.filter((item)=>item.id !== id);

       this.setState({
           products: items
       })
   }

   getCartCount = ()=>{
     const {products} = this.state;

     let count = 0;
     
     products.forEach((product)=>{
       count += product.qty;
     })

     return count;
   }


   getCartTotal = () =>{
     const {products} = this.state;

     let total = 0;

     products.forEach((product)=>{
       let productTotal = product.qty * product.price;

       total += productTotal;
return "";
     })

     return total;
   }


   render(){
const {products} = this.state;
     return (
       <div className="App">
         <Navbar
         count={this.getCartCount()}
         />
        {/* <h1>Cart</h1> */}
        {/* <CartItem /> */}
        <Cart
        products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div className="total-price">
          <h4>
          TOTAL PRICE
            </h4>
            <div className="price-container">
            {this.getCartTotal()}

            </div>
        </div>
       </div>
     );
   }


}




export default App;
