
import { useDispatch, useSelector } from 'react-redux';
import '../pages/Pages.css'
import Productss from '../products/Productss';
import { addToCart, deleteFromCart } from '../Store/cartslice/Cartslice'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products({ }) {

  const cartProducts = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item))
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
  }

  const [bproduct, setBproducts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5018/display`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBproducts(data)
        }
      }).catch((err) =>
        console.log(err));
  });


  return (
    <div>

      {/* card injected from local array of products */}
      {/* {Productss.map((item) => (


        <ul className="cart-list">
          <li key={item.id} className="cart-item">
            <img src={item.image} width="80" alt={item.name} />
            <div>
              <strong>{item.name}</strong>
              <div>{item.category} . {item.desc}</div>
              <div>₹ {item.price}</div>
            </div>

            <div className='cb'>
              {cartProducts.find(Items => Items.id === item.id) ? (
                <button className='btn btn-danger' onClick={() => { deleteCart(item) }} >Remove From Cart</button>)
                :
                (<button className='btn btn-danger' onClick={() => { addCart(item) }} > Add From Cart</button>
                )}
            </div>
          </li>
        </ul>
      ))} */}


      <div>
        <div className='prody'>
        {bproduct.map((Item) => (
          <ul className="product-list" >
            {/* <li key={Item._id} className="cart-item">
              <img src={Item.img} width="80" height="80" alt={Item.name} />
              <div>
                <strong>{Item.name}</strong>
                <div>{Item.desc} </div>
                <div>₹ {Item.price}</div>
              </div>

              <div className='cb'>
                {cartProducts.find(Items => Items._id === Item._id) ? (
                  <button className='btn btn-danger' onClick={() => { deleteCart(Item) }} >Remove From Cart</button>)
                  :
                  (<button className='btn btn-danger' onClick={() => { addCart(Item) }} > Add From Cart</button>
                  )}
              </div>
            </li> */}
            <li key={Item._id}><Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Item.img} />
              <Card.Body >
                <Card.Title className='m-0 p-0'>{Item.name}</Card.Title>
                <Card.Text className='m-0 p-0'> {Item.desc} </Card.Text>
                <Card.Text className='m-0 p-0'> ₹{Item.price} </Card.Text>
                 <div className='cb'>
                {cartProducts.find(Items => Items._id === Item._id) ? (
                  <Button className='btn btn-danger  mt-2 mb-0 p-2' onClick={() => { deleteCart(Item) }} >Remove From Cart</Button>)
                  :
                  (<Button className='btn btn-success mt-2 mb-0 p-2' onClick={() => { addCart(Item) }} > Add to Cart</Button>
                  )}
              </div>
              </Card.Body>
            </Card></li>

          </ul>
        ))}
      </div>
      

      </div>






    </div>
  )

}
export default Products