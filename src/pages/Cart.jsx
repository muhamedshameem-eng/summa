// import { Link, useNavigate } from "react-router"; 
// import '../pages/Pages.css'


// function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {

//   const navigate = useNavigate(); 


//   const totalAmount = cart.reduce((s, item) => s + (item.price * (item.quantity || 1)), 0);

//   const totalItems = cart.reduce((s, item) => s + (item.quantity || 1), 0);

//   const handleCheckout = () => {
//    alert("Checkout");
//   };

//   return (
//     <div>
//       <div className="cart-page">
//         <h2>Your Cart</h2>
//         {cart.length === 0 ? (
//           <p>Cart is empty. <Link to="/products">Browse products</Link></p>
//         ) : (
//           <>
//             <ul className="cart-list">
//               {cart.map(item => (
//                 <li key={item.id} className="cart-item">
//                   <img src={item.image} width="80" alt={item.name} />
//                   <div>
//                     <strong>{item.name}</strong>
//                     <div>{item.category} . {item.desc}</div>
//                     <div>₹ {item.price}</div>
//                   </div>

//                   <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                     <button 
//                       onClick={() => decreaseQuantity(item.id)}
//                       disabled={item.quantity <= 1} 
//                     >
//                       -
//                     </button>

//                     <span>{item.quantity || 1}</span>

//                     <button onClick={() => increaseQuantity(item.id)}>
//                       +
//                     </button>


//                   <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>


//             <div className="cart-summary">
//               <div className="summary-details">
//                 <div>Total Items: <strong>{totalItems}</strong></div>
//                 <div>Total Amount: <strong>₹ {totalAmount}</strong></div>
//               </div>

//               <hr />

//               <button 
//                 className="checkout-btn" 
//                 onClick={handleCheckout}
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }
// export default Cart;

import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../Store/cartslice/Cartslice'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();


  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  }

  const incrementCart = (_id, quantity) => {
    dispatch(updateQuantity({ _id, quantity: quantity + 1 }));
  }
  const decrementCart = (_id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ _id, quantity: quantity - 1 }));
    }
  }

  const subTotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <>

      {/* <div className="cart-page">
        <h2>Your Cart</h2>
        <ul className="cart-list">
          {cartProducts.map(item => (
            <li key={item._id} className="cart-item">
              <img src={item.img} width="80" alt={item.name} />
              <div>
                <strong>{item.name}</strong>
                <div> {item.desc}</div>
                <div>₹ {item.price}</div>
              </div>

              <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => { decrementCart(item._id, item.quantity) }}>-</button><p>{item.quantity}</p>
                <button onClick={() => { incrementCart(item._id, item.quantity) }}>+</button>
              </div>
              <div>
                <button onClick={() => { deleteCart(item) }}>Delete</button>
              </div>
            </li>

          ))}
        </ul>
      </div> */}

      <h2>Your Cart</h2>
      <div className='prody'>
        {cartProducts.map(item => (
          <ul key={item._id} className="cart-list">
            <li  className="cart-item "><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title  className='m-0 p-0'>{item.name}</Card.Title>
                <Card.Text className='m-0 p-0'> {item.desc} </Card.Text>
                <Card.Text className='m-0 p-0'> ₹{item.price} </Card.Text>
                <div className="quantity-controls " style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Button className='btn btn-success mt-2 mb-0 p-2' onClick={() => { decrementCart(item._id, item.quantity) }}>-</Button><p className='btn btn-warning mt-2 mb-0 p-2'>{item.quantity}</p>
                  <Button className='btn btn-success mt-2 mb-0 p-2' onClick={() => { incrementCart(item._id, item.quantity) }}>+</Button>
                </div>
                <div>
                  <Button className='btn btn-danger mt-2 mb-0 p-2' onClick={() => { deleteCart(item) }}>Delete</Button>
                </div>
              </Card.Body>

            </Card>
            </li>



          </ul>
        ))}
      </div>

      ₹{subTotal}

    </>
  );

}

export default Cart;