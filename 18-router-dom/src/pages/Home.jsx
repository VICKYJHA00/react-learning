import React from 'react'

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to MyApp</h1>
      <p style={styles.text}>
        This is a React Router demo application. Click on the navigation links 
        above to explore different pages.
      </p>
      
      <div style={styles.features}>
        <div style={styles.feature}>
          <h3>Fast Navigation</h3>
          <p>Pages change instantly without reloading</p>
        </div>
        <div style={styles.feature}>
          <h3>Responsive</h3>
          <p>Works perfectly on all devices</p>
        </div>
        <div style={styles.feature}>
          <h3>Dynamic Routes</h3>
          <p>URL parameters for dynamic content</p>
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
  title: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#2c3e50'
  },
  text: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  feature: {
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  }
}

export default Home
