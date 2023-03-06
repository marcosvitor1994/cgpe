import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './home-button.png'

const Menu = () => {
  return (
    <div>
        <Navbar key='sm' bg="dark" variant="dark" expand='sm' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}              
              Coordenação-Geral de Pesquisa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Coordenação-Geral de Pesquisa
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 lead">

                    <Link className="nav-link" style={{fontFamily: 'sans-serif'}} to="/home">Página Inicial</Link>
                    <Link className="nav-link" style={{fontFamily: 'sans-serif'}} to="/avaliacaosemanal" >Bloco Avaliação do Governo</Link>
                    <Link className="nav-link" style={{fontFamily: 'sans-serif'}} to="/fluxograma" >Fluxograma</Link>
                    <Link className="nav-link" style={{fontFamily: 'sans-serif'}} to="/tematicas" >Bloco Temáticas da Semana</Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </div>
  )
}

export default Menu