import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyApp</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/users" style={styles.link}>Users</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#2c3e50',
    color: 'white'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    transition: 'background 0.3s'
  }
}

export default Navbar
