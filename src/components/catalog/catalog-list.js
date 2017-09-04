import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './catalog.css'

export default class CatalogList extends Component {
   render() {
      return (
         <div>
            <Grid>
            <Row>
               <Col md={5} offset={1}>
                  <a href="http://companycasuals.com/coverup/start.jsp" target="_blank" rel="noopener noreferrer">
                     <img src={require(`../../img/catalog/sanmar.jpg`)} className="catalog-img" alt='SanMar' />
                  </a>
               </Col>
               <Col md={5} offset={1}>
                  <a href="http://ottocap.com/" target="_blank" rel="noopener noreferrer">
                     <img src={require(`../../img/catalog/otto.jpg`)} className="catalog-img" alt='OttoCap' />
                  </a>
               </Col>
            </Row>
            <Row>
               <Col md={5} offset={1}>
                  <a href="http://www.4logowearables.com/coverupemb" target="_blank" rel="noopener noreferrer">
                     <img src={require(`../../img/catalog/alphaborder.jpg`)} className="catalog-img" alt='AlphaBorder' />
                  </a>
               </Col>
               <Col md={5} offset={1}>
                  <a href="https://www.augustasportswear.com/" target="_blank" rel="noopener noreferrer">
                     <img src={require(`../../img/catalog/augusta.jpg`)} className="catalog-img" alt='Agusta' />
                  </a>
               </Col>
            </Row>
            </Grid>
         </div>
      )
   }
}