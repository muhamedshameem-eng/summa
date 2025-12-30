import c1 from '../assets/c1.webp'
import c2 from '../assets/c2.webp'
import c3 from '../assets/c3.webp'
import c4 from '../assets/c4.webp'

import './components.css'
function Carousel1() {
  return (
    <>
      <div className='caro'>


        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img src={c1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={c2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={c3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={c4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

    </>
  );
}

export default Carousel1;