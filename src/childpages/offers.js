import { Row, Col, Container, Card } from 'react-bootstrap'
import offers from '../assets/offers.svg'
import copy from '../assets/copy.svg'
import NavBar from '../Navbar'
import offer from '../offers.json'
import CopyToClipboard from 'react-copy-to-clipboard'

const Offers = () => {
  return (
    <div>
      <NavBar />

      <h1>Offers</h1>
      <Container>
        <Row>
          {offer.map((d) => (
            <Col sm={6}>
              <Card style={{ width: '100%', textAlign: 'left' }}>
                <div key={d.id}>
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
                      <Col xs={4}>
                        <Card.Title>{d.name}</Card.Title>
                        <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                          till {d.valid}
                        </Card.Text>
                      </Col>
                      <Col xs={5}>
                        <div
                          className='lightbutton'
                          style={{ width: '100%', height: '3.5em' }}
                        >
                          <Row style={{ padding: '10px' }}>
                            <Col xs={3}>
                              <CopyToClipboard text={d.key}>
                                <a href='# ' style={{ width: '90%' }}>
                                  <img src={copy} alt='' srcset='' />
                                </a>
                              </CopyToClipboard>
                            </Col>
                            <Col>{d.key}</Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Offers
