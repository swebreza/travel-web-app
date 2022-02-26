import NavBar from '../Navbar'
import { Form, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
// import fs from 'fs'
const Payment = () => {
  const location = useLocation()
  const { cost, discount } = location.state

  return (
    <div>
      <NavBar />
      <div className='bgimage'>
        <h1>Payment</h1>
        Please enter the informations
        <Container>
          <Form>
            <Form.Group>
              <Form.Control type='text' placeholder='Name' />
            </Form.Group>{' '}
            <br />
            <Form.Group>
              <Form.Control type='text' placeholder='Phone Number' />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type='text' placeholder='Address' />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type='text' placeholder='Pin code' />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type='text' placeholder='Card Number' />
            </Form.Group>
            <Row xs={4} style={{ paddingTop: '10px' }}>
              <Col xs={8}>
                <Form.Group>
                  <Form.Control type='text' placeholder='Exp Date' />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group>
                  <Form.Control type='password' placeholder='CVV' />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <br />
          <br />

          <Row>
            <Col style={{ textAlign: 'left' }}>Cost of trip</Col>
            <Col style={{ textAlign: 'right' }}>${cost}</Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'left' }}>Taxs</Col>
            <Col style={{ textAlign: 'right' }}>$10</Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'left' }}>Discount</Col>
            <Col style={{ textAlign: 'right' }}>${discount * cost}</Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'left' }}>Total</Col>
            <Col style={{ textAlign: 'right' }}>
              ${cost + 10 - discount * cost}
            </Col>
          </Row>
        </Container>
        <p>
          <u style={{ color: '#848484' }}>Terms and conditions applies</u>
        </p>
        <Link to='./history'>
          <button
            className='lightbutton'
            style={{
              width: '90%',
              height: '2em',
              fontSize: '40px',
              marginBottom: '10px',
            }}
          >
            Pay Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Payment
