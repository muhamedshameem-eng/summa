import c1 from '../assets/c1.webp'
import c2 from '../assets/c2.webp'
import c3 from '../assets/c3.webp'
import c4 from '../assets/c4.webp'

import './components.css'
function Carousel1() {
  return (
    <>
      <div className='caro'>


        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={c1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={c3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={c4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </>
  );
}

export default Carousel1;