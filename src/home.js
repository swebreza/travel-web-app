import logo from './assets/Vector.svg'
import btn from './assets/button.svg'
import hello from './assets/Hello.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <img src={logo} alt='' srcset='' className='App-logo ' />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <h1>Hello </h1>
        <h1>Leonard!</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='initbtnp'>
        <Link to='/login'>
          <img src={btn} alt='' />
        </Link>
      </div>
    </div>
  )
}

export default Home
