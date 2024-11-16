///implement a shopping cart using the context and a reducer ,with features like adding the removing and updating items in teh cart items
import React from 'react'
import { useCart } from './CartContext'



function Cart() {

   const {cartState,cartDispatch} =useCart();


   const addTocart = (item)=>{
      const existitem = cartState.cartItems.find((cartItem)=>cartItem.id === item.id);

      if(existitem){
        cartDispatch({type:'UPDATE_QUANTITY',payload:{id:item.id,quantity:existitem.quantity + 1}})
      }else{
        cartDispatch({type:'ADD_TO_CART',payload:{...item,quantity:1}});
      }
 }

 const updateQuantity = (itemId,quantity)=>{
    if(quantity>0){
        cartDispatch({type:'UPDATE_QUANTITY',payload:{id:itemId,quantity}})
    }
 };

 const removeFromCart = (itemId)=>{
    cartDispatch({type:'REMOVE_FROM_CART',payload:itemId})
 }

    const product =[{
        id:1,
        name:'Product 1',
        price:100
    },{
        id:2,
        name:'Product 2',
        price:200
    },{
        id:3,
        name:'Product 3',
        price:300
    },{
        id:4,
        name:'Product 4',
        price:400
    },{
        id:5,
        name:'Product 5',
        price:500
    }
]




  return (
    <div>
      <h2>Shopping cart</h2>
      <ul>
        {
            cartState.cartItems.map((item)=>(
                <li key={item.id}>
                    {item.name}- {item.price}-{item.quantity} 
                  <button 
                  onClick={()=>updateQuantity(item.id,item.quantity+
                   1)}>+</button>  
                  <button 
                  onClick={()=>updateQuantity(item.id,item.quantity-1)}
                  >-</button>  
                  <button onClick={()=>removeFromCart(item.id)}>Remove</button> 
                 
                

                </li>
            ))
        }
      </ul>
      <h2>Product List</h2>

      <ul>
        {
            product.map(product=>{
                return <li key={product.id}>
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                    <button onClick={()=>(addTocart(product))}>Add to cart</button>
                    
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Cart;
