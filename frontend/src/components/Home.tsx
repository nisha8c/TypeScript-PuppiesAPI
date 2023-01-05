import cutePuppyPic from '../images/puppies.jpg';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={cutePuppyPic} alt="cute-puppies" className='img-puppy'/>
      </div>
    </>
    
  )
}

export default Home