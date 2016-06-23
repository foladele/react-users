import React from 'react'
import { Link } from 'react-router'
import Title from 'react-title-component'

const App = ({ children }) => (
  <div>
    <Title render="Users"/>
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">User</Link>
        <ul className="right">
        </ul>
      </div>
    </nav>
    {children}
  </div>
)


export default App