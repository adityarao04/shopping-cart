import React from 'react';


const CartItem = (props) => {
    
    




    // testing(){
    //     const promise = new Promise((resolve, reject) =>{
    //         setTimeout(() =>{
    //             resolve('done');
    //         },5000);
    //     })


    //     promise.then(() =>{
    //         // setState acts like a synchronous call
    //         this.setState({qty:this.qty + 10});
    //         this.setState({qty:this.qty + 10});
    //         this.setState({qty:this.qty + 10});
    //         console.log('state',this.state);
    //     })
    // }

// increaseQuantity function 
// increaseQuantity =() =>{
    // set state form 1
    // when we dont't require previous state use this form
//    this.setState({
//        qty:this.state.qty + 1
//    },()=>{
    //   console.log(this.state);
//   });

   // set state form 2
    // when we require previous state use this form
//     this.setState((previousState)=>{
//         return{
//             qty:previousState.qty + 1
//         }
//   },()=>{
//       console.log(this.state);
//   })
// }
// decreaseQuantity=()=>{
    // set state form 1
     // when we dont't require previous state use this form
//    this.setState({
//     qty:this.state.qty - 1
//    })


// const {qty} = this.state

// if(qty === 0){
//     return;
// }
    // set state form 2
    // when we require previous state use this form
//     this.setState((previousState)=>{
//           return{
//               qty:previousState.qty - 1
//           }
//     })
// };

// deleteCartItem(){
//     console.log("delete")
// }



  
        // console.log("This.props",props);
        // const{price,title,qty,img} = state;
        const{price,title,qty,img} = props.product;
        const{
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct} = props;



        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img}/>
                </div>
                <div className="right-block">
                    <div styles={{fontSize:25}} className="product-title">{title}</div>
                    <div styles={{color:"#777"}} className="sub-info">₹ {price}</div>
                    <div styles={{color:"#777"}} className="sub-info">Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*buttons  */}
                    <img
                      src="https://image.flaticon.com/icons/png/512/992/992651.png"
                      alt="increase" 
                      className="action-icons"
                      onClick={()=> onIncreaseQuantity(product)}
                      />
                    <img 
                    src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                    alt="decrease" 
                    className="action-icons"
                    onClick={()=>{
                        onDecreaseQuantity(product)
                    }}
                    />        
                    <img 
                    src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                    alt="delete" 
                    className="action-icons"
                    onClick={()=>onDeleteProduct(product.id)}
                    />    
                    </div>
                </div>
            </div>
        );
    
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