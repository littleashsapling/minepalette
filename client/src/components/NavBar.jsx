
import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MainNavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          MinePalette
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} eventKey={1} exact activeClassName='active' to="/" >
            Palette
            </Nav.Link>
          <Nav.Link as={Link} eventKey={2} exact activeClassName='active' to="/gallery" >
            Palette Maker
            </Nav.Link>
          <Nav.Link as={Link} eventKey={3} exact activeClassName='active' to="/blocks/create" >
            Upload Block
          </Nav.Link>
          <Nav.Link as={Link} eventKey={4} exact activeClassName='active' to="/blocks/list" >
            Block List
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default MainNavBar