import NavBar from '../Navbar'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import data from '../data'

const History = () => {
  return (
    <div>
      <NavBar />
      <p style={{ fontSize: 'xx-large' }}>Booking History</p>
      <div>
        <Container>
          <Row>
            {' '}
            {data.map((d) => (
              <Col sm={6}>
                <Card style={{ width: '90%', textAlign: 'left' }}>
                  <Card.Body>
                    <div key={d.id}>
                      <Row xs={2}>
                        <Col xs={4}>
                          <img
                            src={d.image}
                            alt=''
                            srcSet=''
                            style={{ width: '100%', height: '100px' }}
                          />
                        </Col>
                        <Col xs={8}>
                          <Card.Title> {d.name}</Card.Title>
                          <Card.Text>Jan 10 - Jan 25 2022</Card.Text>
                          <Link
                            to={{
                              pathname: './details',
                              state: {
                                id: d.id,
                                image: d.image,
                                name: d.name,
                                description: d.description,
                                cost: d.cost,
                              },
                            }}
                          >
                            <button
                              className='lightbutton'
                              style={{ width: '100%', height: '2em' }}
                            >
                              Book Again
                            </button>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <br />
    </div>
  )
}

export default History
