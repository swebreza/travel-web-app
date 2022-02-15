import cart from './assets/cart.png'
import history from './assets/history.png'
import feedback from './assets/feedback.png'
import logout from './assets/logout.png'
import offers from './assets/offers.png'
import search from './assets/search.svg'
import dos from "./assets/do's.png"
import done from "./assets/done's.png"
import profile from './assets/profile.png'
import logo from './assets/Vector.svg'

import { Link } from 'react-router-dom'
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
} from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
      {' '}
      <Navbar bg='light' variant='light' expand={false}>
        <Container fluid>
          <Navbar.Brand href='#' style={{ color: '#fff' }}>
            <img src={logo} alt='' srcset='' />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ color: '#fff' }}
            aria-controls='navbarToggleExternalContent'
          />
          <Navbar.Offcanvas style={{ color: '#fff' }} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id='offcanvasNavbarLabel'
                style={{ color: 'black' }}
              >
                <Link to=''>
                  <img src={profile} alt='' srcset='' className='items' />
                </Link>
                Suweb Reza
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link>
                  <Link
                    to='../childpages/cart'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={cart} alt='' srcset='' />
                    cart
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='../childpages/history'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={history} alt='' srcset='' />
                    history
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='../childpages/feedback'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={feedback} alt='' srcset='' />
                    feedback
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='../childpages/offers'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={offers} alt='' srcset='' />
                    offers
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='' style={{ textDecoration: 'none' }}>
                    <img src={dos} alt='' srcset='' />
                    dos
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='' style={{ textDecoration: 'none' }}>
                    <img src={done} alt='' srcset='' />
                    done
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='' style={{ textDecoration: 'none' }}>
                    <img src={logout} alt='' srcset='' />
                    logout
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='../childpages/pro'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={logout} alt='' srcset='' />
                    pro
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className='d-flex' style={{ paddingTop: '3em' }}>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <a href='#'>
                  <img src={search} alt='' srcset='' />
                </a>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
