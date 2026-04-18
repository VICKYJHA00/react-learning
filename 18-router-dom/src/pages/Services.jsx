import React from 'react'

const Services = () => {
  const services = [
    { id: 1, name: 'Web Development', description: 'Building modern websites' },
    { id: 2, name: 'Mobile Apps', description: 'iOS and Android development' },
    { id: 3, name: 'UI/UX Design', description: 'User interface design' },
    { id: 4, name: 'Consulting', description: 'Technical consultation' }
  ]

  return (
    <div style={styles.container}>
      <h1>Our Services</h1>
      <p style={styles.subtitle}>What we offer to our clients</p>
      
      <div style={styles.grid}>
        {services.map(service => (
          <div key={service.id} style={styles.card}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
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
  subtitle: {
    color: '#666',
    marginBottom: '30px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  },
  card: {
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  }
}

export default Services
