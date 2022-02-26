import { Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar'

const Feedback = () => {
  return (
    <div>
      {' '}
      <NavBar />
      <Form className='App-header'>
        <Form.Group>
          <Form.Label>
            <h1>Feedback</h1>
          </Form.Label>
          <br />
          <br />
          <Form.Control type='text' placeholder='Name' />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control type='email ' placeholder='Email' />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Control placeholder='Message' as='textarea' rows={5} />
        </Form.Group>

        <Link to='../initial/index'>
          <button className='lightbutton' style={{ margin: '1em' }}>
            Send
          </button>
        </Link>
      </Form>
    </div>
  )
}

export default Feedback
