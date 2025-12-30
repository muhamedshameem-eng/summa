
import '../pages/Pages.css'


function Products({addToCart}) {

  const product = [
    { id: 1, name: "Metro", category: "formal", price: 2150, image: "https://kxadmin.metroshoes.com/product/19-28/550/19-28M11.jpg", desc: "Mens Formal Shoe" },
    { id: 2, name: "Metro", category: "formal", price: 2000, image: "https://kxadmin.metroshoes.com/product/19-429/550/19-429M12.jpg", desc: "Mens Formal Shoe" },
    { id: 3, name: "Metro", category: "formal", price: 1200, image: "https://kxadmin.metroshoes.com/product/19-629/550/19-629LA11.jpg", desc: "Mens Formal Shoe" },
    { id: 4, name: "Nouzi", category: "sports", price: 1100, image: "https://kxadmin.metroshoes.com/product/252-8952/550/252-8952M17.jpg", desc: "Mens Sport Shoe" },
    { id: 5, name: "Nouzi", category: "sports", price: 1000, image: "https://kxadmin.metroshoes.com/product/252-20/550/252-20LA14.jpg", desc: "Mens Sport Shoe" },
    { id: 6, name: "Nouzi", category: "sports", price: 2990, image: "https://kxadmin.metroshoes.com/product/361-5/550/361-5M16.jpg", desc: "Mens Sport Shoe" },
  ];


  const listItems = product.map(product =>

    <div className="cardbox">
      <div class="card" style={{ width: '18rem', height: '24rem' }}>
        <li key={product.id}>
          <img src={product.image} style={{ borderBottom: '1px solid black' }} class="card-img-top" alt={product.name} />
          <div className='ct'>
          <h5 class="card-title">{product.name}</h5>
          <p class="card-text">{product.desc}</p>
          
          <p class="card-text">{"₹ " + product.price}</p>
          </div>
          <div className='cb'>
            <button class="btn btn-dark " onClick={() => addToCart(product)}>Add To Cart</button>
          </div>




        </li>
      </div>
    </div>
  );
  return (
    <div>

      <ul>{listItems}</ul>;


    </div>
  )

}
export default Products