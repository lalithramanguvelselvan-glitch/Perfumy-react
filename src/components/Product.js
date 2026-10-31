import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
//Product
function Product()
{
  return(
       <div className="products">
            <div className="box">
            <img src={one} alt="perfume 1"></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            <div className="box">
            <img src={two} ></img>
            <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
            <img src={three} ></img>
            <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
            
        </div>
  )
}

export default Product