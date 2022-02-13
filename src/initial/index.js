import search from '../assets/search.svg'
import logo from '../assets/Vector.svg'
import discover from '../assets/Discover.svg'
import menu from '../assets/menu.png'
import ImageSilder from './imageSlider'
import bicycle from '../assets/bicycle.png'
import five from '../assets/5.0.png'
import { useState } from 'react'
import Grid from './grid'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container } from 'react-bootstrap'
import NavBar from '../Navbar'

const Index = () => {
  const x = <img src={menu} alt='' srcset='' className='menu' />
  const [menus, setMenu] = useState(x)
  const menuHandle = (event) => {
    if (menu) setMenu(<Grid style={{ position: 'absolute', left: '0px' }} />)
  }
  return (
    <div>
      <NavBar />
      <br /> <ImageSilder />
      <p>Nearby activities</p>
      <div>
        <Container>
          <Row>
            <Col sm>
              <img src={bicycle} alt='' srcset='' />
              <p> Biking the city</p>
            </Col>
            <Col sm>
              <img src={bicycle} alt='' srcset='' />
              <p> Biking the city</p>
            </Col>
            <Col sm>
              <img src={bicycle} alt='' srcset='' />
              <p> Biking the city</p>
            </Col>
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
