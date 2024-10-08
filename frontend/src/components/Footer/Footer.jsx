import React from 'react'
import './footer.css'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick_links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const quick_links2 = [
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' >
          <div className="logo">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.
              </p>
              <div className="social__links d-flex align-items-center gap-4"></div>
              <span>
                <Link to="#"><i className="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to="#"><i className="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to="#"><i className="ri-facebook-circle-line"></i></Link>
              </span>
              <span>
                <Link to="#"><i className="ri-instagram-line"></i></Link>
              </span>
            </div>
          </Col>

          <Col lg='3'>
          <h5 className='footer__link-tile'> Discover </h5>
          <ListGroup className='footer__quick-links'>
            {
              quick_links.map((item,index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>

          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'> Quick Links </h5>
          <ListGroup className='footer__quick-links'>
            {
              quick_links2.map((item,index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
          
          </Col>
          <Col lg='3'>
          
          </Col>
        </Row>

        </Container>
      </footer>
  )
}

export default Footer;