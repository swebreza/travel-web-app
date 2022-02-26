import logo from './assets/Vector.svg'
import { Link } from 'react-router-dom'
import { Form, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import google from './assets/google.svg'
const Login = () => {
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
                <h1>Login</h1>
              </Form.Label>
              <br />
              <br />
              <Form.Control type='text' placeholder='Userneme' />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control type='password' placeholder='password' />
            </Form.Group>

            <Container style={{ fontSize: '10px', padding: '1em' }}>
              <Row>
                <Col>
                  {' '}
                  <Form.Group className=''>
                    <Form.Check type='checkbox' label='Check me out' />
                  </Form.Group>
                </Col>
                <Col>
                  <a href='#  ' style={{ fontSize: '10px' }}>
                    Forgot Password
                  </a>
                </Col>
              </Row>
            </Container>

            <Link to='./initial/index'>
              <button className='lightbutton' style={{ margin: '1em' }}>
                Login
              </button>
            </Link>
          </Form>

          <Link to='./initial/signup'>
            <button className='darkbutton'>Signup</button>
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

export default Login
//------------------------------
//  <input
//           type='text'
//           label='user'
//           className='username'
//           placeholder='User Name'
//         />
//         <br />
//         <input
//           type='text'
//           label='user'
//           type='password'
//           className='password'
//           placeholder='Password'
//         />
//         <Link to='./initial/index'>
//           <img src={loginbtn} alt='' srcset='' className='loginbtn' />
//         </Link>
//         <Link to='./initial/signup'>
//           <img src={signupd} alt='' srcset='' className='signupd' />
//         </Link>
