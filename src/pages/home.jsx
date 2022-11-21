import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
               
              <div style={{ 
                  position: 'relative',
                  textAlign: 'center',
                  color: 'white'
              }}>
                <img src="https://img.freepik.com/fotos-premium/luz-azul-gradiente-banner-abstrato_8087-1851.jpg?w=1060" alt="Snow" 
                style={{

                  width:'100%', 
                  height:'250px',                  

                }} />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontFamily: 'Montserrat'
                  }}>
                  <h3>MINISTÉRIO DAS COMUNICAÇÕES</h3>
                  <h4>Secretaria Especial de Comunicação Social</h4>
                  <h4>Secretaria de Publicidade, Promoção e Patrocínio</h4>
                  <h4>Departamento de Publicidade e Pesquisa</h4>
                  <h3>Coordenação-Geral de Pesquisa</h3>
                </div>
              </div>
             
          </Col>
          

        </Row>
<br />
        <Row>
          <Col>

            <Card className="text-center" bg={'Primary'.toLowerCase()} text={'white'}>
              <Link to="/fluxograma">
                  <div
                    style={{ 
                          width:'100%',
                          height:'220px',
                          borderRadius: '5px',
                          backgroundImage: `url('https://aprendendogestao.com.br/wp-content/uploads/2016/07/FV-Featured_IMG.jpg')`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',                                
                    }} 
                  /> 
              </Link>
              <Card.Body>
                <Card.Title>Fluxograma</Card.Title>
                <Card.Text>
                  Conheça como é o funcionamento dos processos ligados a Pesquisa de Opinião e seus documentos importantes.
                </Card.Text>
                
              </Card.Body>
              <Card.Footer className="text-muted">
                <Link to="/fluxograma" className="d-grid gap-2"><Button variant="outline-light">Fluxograma de Processo CGPE</Button></Link>
              </Card.Footer>              
            </Card>
          
          </Col>
          <Col>
          
            <Card className="text-center" bg={'Primary'.toLowerCase()} text={'white'}>
              <Link to="/avaliacaosemanal">
                  <div
                    style={{ 
                          width:'100%',
                          height:'220px',
                          borderRadius: '5px',
                          backgroundImage: `url('https://www.sertms.com/wp-content/uploads/2022/06/businessman-holding-product-service-evaluation-sheet-customer-satisfaction-concept-1.png')`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',                                
                    }} 
                  /> 
              </Link>
              <Card.Body>
                <Card.Title>Pesquisa Quantitativa Telefônica</Card.Title>
                <Card.Text>
                  Avaliação da percepção da sociedade sobre a atuação do Poder Executivo federal em formular políticas, linhas de atuação, instrumentos normativos.
                </Card.Text>
                
              </Card.Body>
              <Card.Footer className="text-muted">
                <Link to="/avaliacaosemanal" className="d-grid gap-2"><Button variant="outline-light">Avaliação do Governo Federal</Button></Link>
              </Card.Footer>              
            </Card>
          
          </Col>
          <Col>
          
            <Card className="text-center" bg={'Primary'.toLowerCase()} text={'white'}>
              <Link to="/tematicas">
                  <div
                    style={{ 
                          width:'100%',
                          height:'220px',
                          borderRadius: '5px',
                          backgroundImage: `url('https://www.abilways.pt/wp-content/uploads/2018/05/CP_E-AVALIA%C3%87%C3%83O-DE-DESEMPENHO.jpg')`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',                                
                    }} 
                  /> 
              </Link>
              <Card.Body>
                <Card.Title>Pesquisa temática Semanal</Card.Title>
                <Card.Text>

                  Temas sobre o impacto e a percepção da sociedade em relação às políticas, aos programas e às ações do Poder Executivo federal.

                </Card.Text>
                
              </Card.Body>
              <Card.Footer className="text-muted">
                <Link to="/tematicas" className="d-grid gap-2"><Button variant="outline-light">Temáticas da Semana</Button></Link>
              </Card.Footer>              
            </Card>
          </Col>     
        </Row>
        <br />
      </Container>
      
      
    </div>
  )
}

export default Home