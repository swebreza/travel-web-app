import logo from '../assets/Vector.svg'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Container } from 'react-bootstrap'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import google from '../assets/google.svg'

const Signup = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(167.7deg, #D5E2E5 0%, #FFFFFF 100.41%)',
        position: 'relative',
        height: '600px',
        width: '100%',
      }}
    >
      <div>
        <img src={logo} alt='' srcset='' className='App-logo ' />
        <div className='App-header'>
          <Form>
            <Form.Group>
              <Form.Label>
                {' '}
                <h1>Signup</h1>
              </Form.Label>
              <br />
              <br />
              <Form.Control type='text' placeholder='Userneme' />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type='password' placeholder='password' />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type='password' placeholder='Confirm password' />
            </Form.Group>

            <Link to='./index'>
              <button className='lightbutton' style={{ margin: '1em' }}>
                Signup
              </button>
            </Link>
          </Form>

          <Link to='../login'>
            <button className='darkbutton'>Login</button>
          </Link>
        </div>
        <hr />
        <div>
          <Container>
            <Row>
              <Col>
                <img src={facebook} alt='' srcset='' className='facebook' />
              </Col>
              <Col>
                <img src={twitter} alt='' srcset='' className='twitter' />
              </Col>
              <Col>
                <img src={google} alt='' srcset='' className='google' />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Signup
