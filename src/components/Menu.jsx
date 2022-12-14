import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Navbar key='xl' bg="primary" variant="dark" expand='xl' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Coordenação-Geral de Pesquisa</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
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