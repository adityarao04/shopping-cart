import React,{ Component} from 'react';
import './App.css';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/app";
import { firestore } from 'firebase'



class App extends Component  {




  constructor(){
        // call super() to call contructor of parent class
        super();
        this.state = {
            products: [],
            loading: true
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
    }


    componentDidMount(){
      firebase
      .firestore()
      .collection('products')
      .get()
      .then((snapshot) =>{
        console.log(snapshot);

        snapshot.docs.map((doc) =>{
          console.log(doc.data());
        });

        const products = snapshot.docs.map((doc) =>{
          const data = doc.data();
          data['id'] = doc.id;
           return data;
        })


        this.setState({
          products: products,
          loading: false
        })
      })
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
const {products,loading} = this.state;
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
        {loading && <h1>Loading Products....</h1>}
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
