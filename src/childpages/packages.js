import NavBar from '../Navbar'
import { Row, Col, Container, Card, Form } from 'react-bootstrap'
import pune from '../assets/pune.png'
// import bangalore from '../assets/bangalore.png'
import { Link } from 'react-router-dom'

const Packages = () => {
  return (
    <div>
      <NavBar />
      <p style={{ fontSize: 'xx-large' }}>Booking History</p>
      <div>
        <Container>
          <Row>
            <Col sm>
              <Card style={{ hight: '100%', textAlign: 'left' }}>
                <Card.Body>
                  <Row xs={2}>
                    <Col xs={4}>
                      <img
                        src={pune}
                        alt=''
                        srcSet=''
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col xs={7} style={{ paddingLeft: '0em' }}>
                      <Card.Title>Pune</Card.Title>
                      <Row xs={10}>
                        <Col>
                          <Form.Control
                            type='date'
                            style={{ height: '20px', fontSize: '10px' }}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type='date'
                            style={{ height: '20px', fontSize: '10px' }}
                          />
                        </Col>
                      </Row>
                      <br />
                      <Link to='./details'>
                        <button
                          className='lightbutton'
                          style={{ width: '100%', height: '2em' }}
                        >
                          $99/week
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ hight: '100%', textAlign: 'left' }}>
                <Card.Body>
                  <Row xs={2}>
                    <Col xs={4}>
                      <img
                        src='https://images.indianexpress.com/2021/05/Bengaluru-Lockdown-1.jpg'
                        alt=''
                        srcSet=''
                        style={{ width: '100%' }}
                      />
                    </Col>
                    <Col xs={7} style={{ paddingLeft: '0em' }}>
                      <Card.Title>Bangalore</Card.Title>
                      <Row xs={10}>
                        <Col>
                          <Form.Control
                            type='date'
                            style={{ height: '20px', fontSize: '10px' }}
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            type='date'
                            style={{ height: '20px', fontSize: '10px' }}
                          />
                        </Col>
                      </Row>
                      <br />
                      <Link to='./details'>
                        <button
                          className='lightbutton'
                          style={{ width: '100%', height: '2em' }}
                        >
                          $129/week
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
    </div>
  )
}

export default Packages
