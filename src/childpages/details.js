/* eslint-disable react/style-prop-object */
import NavBar from '../Navbar'
import { Row, Col, Container, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pune from '../assets/pune.jpg'
import star from '../assets/star.svg'
import halfstar from '../assets/halfstar.svg'

const Details = () => {
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
                      src={pune}
                      alt=''
                      srcset=''
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                  </Col>
                  <Col sm={8}>
                    <Card.Title>
                      <h2>Pune</h2>
                    </Card.Title>
                    <Card.Text style={{ color: '#D5E5E2' }}>
                      Description
                    </Card.Text>
                    <Card.Text style={{ color: '#8E8E8E' }}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Card.Text>
                    <Row>
                      <Col xs={3}>Rating</Col>
                      <Col>
                        <img src={star} alt='' srcset='' />
                        <img src={star} alt='' srcset='' />
                        <img src={star} alt='' srcset='' />
                        <img src={star} alt='' srcset='' />
                        <img src={halfstar} alt='' srcset='' />
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
                    </Form>
                    <br />
                    <Row>
                      <Link to='./payment'>
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
