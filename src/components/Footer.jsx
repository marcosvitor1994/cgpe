import React from 'react'
import { Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
        <Col md={12}>
               
               <div style={{ 
                   position: 'relative',
                   textAlign: 'center',
                   color: 'white'
               }}>
                 <img src="https://img.freepik.com/fotos-premium/luz-azul-gradiente-banner-abstrato_8087-1851.jpg?w=1060" alt="Snow" 
                 style={{
 
                   width:'100%', 
                   height:'80px',                  
 
                 }} />
                 <div
                   style={{
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     fontFamily: 'Montserrat'
                   }}>
                   <h4>Coordenação-Geral de Pesquisa</h4>
                 </div>
               </div>
              
           </Col>
    </div>
  )
}

export default Footer