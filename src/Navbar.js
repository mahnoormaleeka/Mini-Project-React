import React from 'react';
import burgerLogo from './burger-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>
        <img src={burgerLogo} alt="Logo" style={styles.logoImg} />
      </div>
      <div style={styles.navLinks}>
      <Link to="/BuildBurger" style={styles.link}>
          Burger Builder
        </Link>
        
        <Link to="/login" style={styles.link}>
          Login
        </Link>

      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    
    backgroundColor: '#703b09',
    padding: '10px',
    width: '100%',
  },
  logo: {
    display: 'flex',
    boxSizing: 'border-box',
    borderRadius: '5px',
    alignItems: 'center',
    backgroundColor : 'white',
    marginLeft: '10px',

  },
  logoImg: {
    height: '40px',
    width: '60px',
    margin: 'auto',
    justifyContent: 'center',
    padding: '5px 5px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '10px 15px',
    margin: '0 5px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  },
  link: {
    color: 'white',
    marginRight: '10px',
  }
};

export default Navbar;
