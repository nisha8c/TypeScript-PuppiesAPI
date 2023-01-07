import cutePuppyPic1 from '../images/puppies.jpg';
import cutePuppyPic2 from '../images/1.jpg';
import cutePuppyPic3 from '../images/2.jpg';
import cutePuppyPic4 from '../images/3.jpg';
import cutePuppyPic5 from '../images/4.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <>
      <Carousel className='carousel-container'
        infiniteLoop autoPlay
      >
        <div className='image'>
            <img src={cutePuppyPic1} alt="cute-puppies" className='img-puppy'/>
            <p className="legend">Legend 1</p>
        </div>

        <div className='image'>
        <img src={cutePuppyPic2} alt="cute-puppies" className='img-puppy'/>
            <p className="legend">Legend 2</p>
        </div>

        <div className='image'>
        <img src={cutePuppyPic3} alt="cute-puppies" className='img-puppy'/>
            <p className="legend">Legend 3</p>
        </div>

        <div className='image'>
        <img src={cutePuppyPic4} alt="cute-puppies" className='img-puppy'/>
            <p className="legend">Legend 4</p>
        </div>

        <div className='image'>
        <img src={cutePuppyPic5} alt="cute-puppies" className='img-puppy'/>
            <p className="legend">Legend 5</p>
        </div>
        
    </Carousel>
    </>
    
  )
}

export default Home