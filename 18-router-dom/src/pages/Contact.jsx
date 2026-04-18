import React from 'react'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p style={styles.text}>We would love to hear from you. Send us a message!</p>
      
      <div style={styles.content}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input type="text" style={styles.input} placeholder="Your name" required />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" style={styles.input} placeholder="Your email" required />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea style={styles.textarea} rows="5" placeholder="Your message" required></textarea>
          </div>
          
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        
        <div style={styles.info}>
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@myapp.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Web Street, Internet City</p>
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
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px'
  },
  form: {
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    fontFamily: 'inherit'
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  info: {
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  }
}

export default Contact
