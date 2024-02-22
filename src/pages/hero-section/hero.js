import fruits from "../hero-section/assets/fruits.jpg";
import vegetable from "../hero-section/assets/vegetable.jpg";
import vegies from "../hero-section/assets/vegies.jpg";

function heroSection() {
    return(
     <section>
         <div>
        <div>
        <h4>100% fresh products</h4>
        <h1>Organic foods</h1>
       </div>

       <div>
       <button>Buy now</button>
       <button>Start selling</button>
       </div>
     
      </div>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div classNameName="carousel-inner">
    <div className="carousel-item active">
      <img src={fruits} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={vegetable} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={vegies} className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
     </section>
    )

}

export default heroSection;