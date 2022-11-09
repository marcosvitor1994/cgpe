import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} align="justify">
            <h5>  
              Ao Departamento de Publicidade e Pesquisa compete:
              <br />
              <br />
                    ...
                    <br />
                    IX - orientar a aplicação de pesquisas de opinião pública para subsidiar o desempenho das atribuições da Secretaria Especial; e
                    <br />
                    X - coordenar a avaliação da percepção da sociedade sobre políticas públicas, programas e ações do Governo, e os resultados de pesquisas externas de interesse do Poder Executivo federal.
                    <br />
                    <br />
                    De acordo com o Decreto nº 10.747, de 13 de julho de 2021
            </h5>
          </Col>
          <Col md={6} align="justify">
            <h5>  
              Subseção IV
              <br />
              <br />

                Da Coordenação-Geral de Pesquisa
                <br />
                <br />

                Art. 27. À Coordenação-Geral de Pesquisa compete:
                <br />
                <br />

                  I - aplicar pesquisas de opinião pública para subsidiar o desempenho das atribuições da Secretaria Especial ou de seu interesse no âmbito do SICOM;
                  <br />
                  II - executar pesquisas de avaliação de ações de comunicação realizadas pela Secretaria Especial ou de seu interesse no âmbito do SICOM;
                  <br />
                  III - aplicar pesquisas sobre o impacto e a percepção da sociedade em relação às políticas, aos programas e às ações do Poder Executivo federal;
                  <br />
                  IV - avaliar a percepção da sociedade sobre a atuação do Poder Executivo federal; e
                  <br />
                  V - acompanhar os resultados de pesquisas externas de interesse do Poder Executivo federal.
                  <br />
                  <br />

                De acordo com a Portaria MCOM Nº 3.525, de 3 de Setembro de 2021
            </h5>
          </Col>

          <Col>
          <br />

            <Link to="/fluxograma" ><Button variant="primary">Fluxograma de Processo CGPE</Button></Link>{' '}
            <Link to="/fluxograma" ><Button variant="primary">Bloco de Avaliação do Governo</Button></Link>{' '}
            <Link to="/fluxograma" ><Button variant="primary">Bloco Temáticas da Semana</Button></Link>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  )
}

export default Home