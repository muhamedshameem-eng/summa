import { Link, useNavigate } from "react-router"; 
import '../pages/Pages.css'

function Cart({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) {
  
  const navigate = useNavigate(); 

 
  const totalAmount = cart.reduce((s, item) => s + (item.price * (item.quantity || 1)), 0);

  const totalItems = cart.reduce((s, item) => s + (item.quantity || 1), 0);

  const handleCheckout = () => {
   alert("Checkout");
  };

  return (
    <div>
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty. <Link to="/products">Browse products</Link></p>
        ) : (
          <>
            <ul className="cart-list">
              {cart.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} width="80" alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <div>{item.category} . {item.desc}</div>
                    <div>₹ {item.price}</div>
                  </div>

                  <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1} 
                    >
                      -
                    </button>
                    
                    <span>{item.quantity || 1}</span>
                    
                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  

                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>

           
            <div className="cart-summary">
              <div className="summary-details">
                <div>Total Items: <strong>{totalItems}</strong></div>
                <div>Total Amount: <strong>₹ {totalAmount}</strong></div>
              </div>
              
              <hr />
              
              <button 
                className="checkout-btn" 
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
export default Cart;