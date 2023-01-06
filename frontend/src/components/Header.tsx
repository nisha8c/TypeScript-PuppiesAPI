import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <Link className='header-link' to="/">Home</Link>
          <Link className='header-link' to="/puppies">All Puppies</Link>
          <Link className='header-link' to="/add-puppy">Add Puppy</Link>
          <Link className='header-link' to="/about">About</Link>
        </nav>
      </header>
      
    </>
  )
}

export default Header