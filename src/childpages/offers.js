import { Row, Col, Container, Card } from 'react-bootstrap'
import offers from '../assets/offers.svg'
import NavBar from '../Navbar'

const Offers = () => {
  return (
    <div>
      <NavBar />

      <h1>Offers</h1>
      <Container>
        <Row>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row xs={2}>
                  <Col xs={3}>
                    <img
                      src={offers}
                      alt=''
                      srcset=''
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>30% off</Card.Title>
                    <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                      till 30th march
                    </Card.Text>
                  </Col>
                  <Col xs={3}>
                    {' '}
                    <button
                      className='lightbutton'
                      style={{ width: '100%', height: '2em' }}
                    >
                      ABCD
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row xs={2}>
                  <Col xs={3}>
                    <img
                      src={offers}
                      alt=''
                      srcset=''
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>30% off</Card.Title>
                    <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                      till 30th march
                    </Card.Text>
                  </Col>
                  <Col xs={3}>
                    {' '}
                    <button
                      className='lightbutton'
                      style={{ width: '100%', height: '2em' }}
                    >
                      ABCD
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row xs={2}>
                  <Col xs={3}>
                    <img
                      src={offers}
                      alt=''
                      srcset=''
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>30% off</Card.Title>
                    <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                      till 30th march
                    </Card.Text>
                  </Col>
                  <Col xs={3}>
                    {' '}
                    <button
                      className='lightbutton'
                      style={{ width: '100%', height: '2em' }}
                    >
                      ABCD
                    </button>
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

export default Offers
