
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <header>
    <h1>MinePalette</h1>
    <div className="links">
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/gallery" className="link">
        Gallery
      </NavLink>
      <NavLink to="/blocks/create" className="link">
        Upload Block
      </NavLink>
    </div>
  </header>
)

export default Navbar