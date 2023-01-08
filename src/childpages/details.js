/* eslint-disable react/style-prop-object */
import NavBar from '../Navbar'
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import offer from '../offers.json'
import Ratings from './rating'

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Details = () => {
  const location = useLocation()
  const { name, id, image, description, cost, cart } = location.state

  const [code, setCode] = useState('')
  const [discount, setdiscount] = useState(0)
  // const [message, setmessage] = useState('')
  const HandleChange = (event, discount) => {
    setCode(event.target.value)
    console.log(code)
  }
  const HandleClick = (discount) => {
    offer.map((d) => {
      if (d.key === code) {
        setdiscount(d.off)
        // return setmessage('offer Found')
      }
      // if (d.key !== code) {
      //   console.log('FALSE')
      // }
    })
  }

  return (
    <div>
      <NavBar />
      <h1>Book Now</h1>
      <Container>
        <Row>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row>
                  <Col sm={4}>
                    <img
                      src={image}
                      alt=''
                      srcSet=''
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                  </Col>
                  <Col sm={8}>
                    <Card.Title>
                      <h2>{name}</h2>
                    </Card.Title>
                    <Card.Text>
                      only at
                      <span style={{ color: '#f8a100' }}> ${cost}/-</span>
                    </Card.Text>
                    <Card.Text style={{ color: '#D5E5E2' }}>
                      Description
                    </Card.Text>
                    <Card.Text style={{ color: '#8E8E8E' }}>
                      {description}
                    </Card.Text>
                    <Row>
                      <Col xs={3}>Rating</Col>
                      <Col>
                        <Ratings />
                      </Col>
                    </Row>
                    <Form>
                      <Form.Group>
                        <Form.Label>
                          <Card.Text>From</Card.Text>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Name Your Place'
                        />
                      </Form.Group>
                    </Form>
                    <Card.Text>To Pune</Card.Text>
                    <Form>
                      <Form.Group>
                        <Form.Label>
                          <Card.Text>Date</Card.Text>
                        </Form.Label>
                        <Row xs={6}>
                          <Col xs={6}>
                            <Form.Control type='date' placeholder='' />
                          </Col>
                          <Col xs={6}>
                            <Form.Control type='date' placeholder='' />
                          </Col>
                        </Row>
                      </Form.Group>
                      <Row style={{ paddingTop: '10px' }}>
                        <Col>
                          <Form.Group>
                            <Form.Control
                              type='text'
                              placeholder='promo code'
                              onChange={HandleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          {discount}
                          <Button
                            className='rebutton'
                            style={{
                              backgroundColor: '#000000',
                              color: '#fff',
                              fontSize: 'medium',
                              borderRadius: '8px',
                              width: '100px',
                            }}
                            onClick={HandleClick}
                          >
                            Apply
                          </Button>
                        </Col>
                      </Row>
                      {
                        //message
                      }
                    </Form>
                    <br />
                    <Row>
                      <Link
                        to={{
                          pathname: './payment',
                          state: {
                            cost: cost,
                            cart: cart,
                            discount: discount,
                          },
                        }}
                      >
                        <button
                          className='lightbutton'
                          style={{
                            width: '100%',
                            height: '2em',
                            fontSize: '40px',
                          }}
                        >
                          Book Now
                        </button>
                      </Link>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Details
