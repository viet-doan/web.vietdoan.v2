import React, { useState, useEffect  } from 'react';
import catIcon from '../../assets/cat-icon.png';
import { Link } from "react-router-dom";

function Navigation() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  // Closes minimal navbar when user interacts through click/scroll/resize
  useEffect(() => {
    const handleInteract = (event) => {
      if (event.type!=='click') {
        setMenuIsActive(false);
        return;
      }
      if (!(event.target instanceof Element) || event.target.closest('.btn-menu')!== null) {
        return;
      }
      setMenuIsActive(false);
    };

    window.addEventListener('click', handleInteract);
    window.addEventListener('scroll', handleInteract);
    window.addEventListener('resize', handleInteract);

    return () => {
      window.removeEventListener('click', handleInteract);
      window.removeEventListener('scroll', handleInteract);
      window.addEventListener('resize', handleInteract);
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="nav-left">
        <img className="nav-icon" src={catIcon} alt='Kitty Icon'/>
        <a className="nav-name" href="/"><h3>Viet Doan</h3></a>
        <div className="navLinks">  
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/About">About</Link>
          <Link className="nav-item" to="/Projects">Projects</Link>
        </div>
      </div>
      
      <a className="nav-btn nav-right" href="/Contact">Contact</a>
      <button className='btn-menu nav-right' onClick={() => setMenuIsActive(!menuIsActive)}>
        <div className={`menu-icon ${menuIsActive ? 'active' : ''}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={`${menuIsActive ? 'minimal-navLinks' : 'minimal'}`}>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/About">About</Link>
          <Link className="nav-item" to="/Projects">Projects</Link>
          <Link className="nav-item" to="/Contact">Contact</Link>
        </div>
      </button>
    </nav>
  );
}

export default Navigation;
