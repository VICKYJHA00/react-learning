import React from 'react'
import { useParams, Link } from 'react-router-dom'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' }
]

const Users = () => {
  return (
    <div style={styles.container}>
      <h1>Users List</h1>
      <p style={styles.subtitle}>Click on a user to see their profile</p>
      
      <div style={styles.list}>
        {users.map(user => (
          <Link key={user.id} to={`/users/${user.id}`} style={styles.userCard}>
            <div style={styles.avatar}>{user.name.charAt(0)}</div>
            <div>
              <h3 style={styles.name}>{user.name}</h3>
              <p style={styles.email}>{user.email}</p>
            </div>
            <span style={styles.role}>{user.role}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const UserDetail = () => {
  const { id } = useParams()
  const user = users.find(u => u.id === parseInt(id))
  
  if (!user) {
    return <div style={styles.container}><h2>User not found</h2></div>
  }
  
  return (
    <div style={styles.container}>
      <Link to="/users" style={styles.backLink}>← Back to Users</Link>
      
      <div style={styles.detailCard}>
        <div style={styles.largeAvatar}>{user.name.charAt(0)}</div>
        <h1>{user.name}</h1>
        <p style={styles.detail}><strong>Email:</strong> {user.email}</p>
        <p style={styles.detail}><strong>Role:</strong> {user.role}</p>
        <p style={styles.detail}><strong>User ID:</strong> {user.id}</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  subtitle: {
    color: '#666',
    marginBottom: '30px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  userCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: '#fff',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '15px'
  },
  name: {
    margin: '0 0 5px 0'
  },
  email: {
    margin: 0,
    color: '#666',
    fontSize: '14px'
  },
  role: {
    marginLeft: 'auto',
    padding: '5px 15px',
    backgroundColor: '#27ae60',
    color: 'white',
    borderRadius: '20px',
    fontSize: '12px'
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '20px',
    color: '#3498db',
    textDecoration: 'none'
  },
  detailCard: {
    padding: '40px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  },
  largeAvatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    margin: '0 auto 20px'
  },
  detail: {
    margin: '10px 0',
    fontSize: '16px'
  }
}

export default Users
