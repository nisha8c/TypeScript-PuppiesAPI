import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/puppies">All Puppies</Link>
          <Link to="/add-puppy">Add Puppy</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      
    </>
  )
}

export default Header