import ImageSilder from './imageSlider'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Card } from 'react-bootstrap'
import NavBar from '../Navbar'
import data from '../data'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <NavBar />
      <br /> <ImageSilder />
      <br />
      <p>Nearby activities</p>
      <div>
        <Container>
          <Row>
            {' '}
            {data.map((d) => (
              <Col sm={6}>
                <Card style={{ borderRadius: '10px' }}>
                  <div key={d.id}>
                    <center>
                      <Link
                        to={{
                          pathname: '../childpages/details',
                          state: {
                            id: d.id,
                            image: d.image,
                            name: d.name,
                            description: d.description,
                            cost: d.cost,
                          },
                        }}
                      >
                        <img
                          src={d.image}
                          alt=''
                          srcset=''
                          style={{
                            width: '100%',
                            height: '300px',
                          }}
                        />
                      </Link>
                    </center>
                  </div>

                  <p> {d.name}</p>
                </Card>{' '}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}

export default Index
// to be used
// <button onClick={menuHandle}>{menus} Demo</button>
