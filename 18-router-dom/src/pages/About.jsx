import React from 'react'

const About = () => {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <p style={styles.text}>
        We are a company dedicated to building amazing web applications.
      </p>
      
      <div style={styles.section}>
        <h2>Our Mission</h2>
        <p>To create intuitive and powerful web experiences for everyone.</p>
      </div>
      
      <div style={styles.section}>
        <h2>Our Vision</h2>
        <p>To be the leading provider of innovative web solutions.</p>
      </div>
      
      <div style={styles.stats}>
        <div style={styles.stat}>
          <h3>100+</h3>
          <p>Projects Completed</p>
        </div>
        <div style={styles.stat}>
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>
        <div style={styles.stat}>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  text: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px'
  },
  section: {
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9'
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '40px'
  },
  stat: {
    padding: '30px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#2c3e50',
    color: 'white'
  }
}

export default About
