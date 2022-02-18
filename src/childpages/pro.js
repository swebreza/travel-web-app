import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar'
import tick from '../assets/tick.svg'

const Pro = () => {
  return (
    <div>
      <NavBar />
      <div>
        <center>
          <Container>
            <Col className='justify-content-md-center'>
              <h1>Become a pro member</h1>
              <br />
              <Row
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  width: '75%',
                  borderRadius: '20px',
                }}
              >
                <Row style={{ paddingTop: '12px' }}>
                  <h2 style={{ textAlign: 'center' }}>Pro</h2>
                </Row>
                <hr />
                <Row>
                  <Col xs={4} style={{ textAlign: 'right' }}>
                    <img src={tick} alt='' srcset='' />
                  </Col>
                  <Col xs={8} style={{ textAlign: 'left' }}>
                    <h5>Exclusive Packages</h5>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} style={{ textAlign: 'right' }}>
                    <img src={tick} alt='' srcset='' />
                  </Col>
                  <Col xs={8} style={{ textAlign: 'left' }}>
                    <h5>Exclusive Packages</h5>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} style={{ textAlign: 'right' }}>
                    <img src={tick} alt='' srcset='' />
                  </Col>
                  <Col xs={8} style={{ textAlign: 'left' }}>
                    <h5>Exclusive Discounts</h5>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} style={{ textAlign: 'right' }}>
                    <img src={tick} alt='' srcset='' />
                  </Col>
                  <Col xs={8} style={{ textAlign: 'left' }}>
                    <h5>Exclusive Offers</h5>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} style={{ textAlign: 'right' }}>
                    <img src={tick} alt='' srcset='' />
                  </Col>
                  <Col xs={8} style={{ textAlign: 'left' }}>
                    <h5>Book now pay later</h5>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} style={{ textAlign: 'right' }}>
                    <img src={tick} alt='' srcset='' />
                  </Col>
                  <Col xs={8} style={{ textAlign: 'left' }}>
                    <h5>Exclusive Membership</h5>
                  </Col>
                </Row>
                <Row>
                  <center>
                    <Col style={{ paddingLeft: '2em' }}>
                      <Link
                        to={{
                          pathname: '/childpages/payment',
                          state: {
                            cost: 11.6,
                          },
                        }}
                      >
                        <button
                          className='lightbutton'
                          style={{
                            width: '90%',
                            height: '2em',
                            fontSize: '40px',
                            marginBottom: '10px',
                          }}
                        >
                          $11.6/mon
                        </button>
                      </Link>
                    </Col>
                  </center>
                </Row>
              </Row>
            </Col>
          </Container>
          <br />
          <p>
            <u style={{ color: '#848484' }}>Terms and conditions applies</u>
          </p>
        </center>
      </div>
    </div>
  )
}

export default Pro
