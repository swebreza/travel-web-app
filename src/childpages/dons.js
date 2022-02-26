import NavBar from '../Navbar'
import { Card } from 'react-bootstrap'

const Dons = () => {
  return (
    <div>
      <NavBar />
      <h1>Don's</h1>
      <center>
        <Card style={{ width: '60%', padding: '2em', textAlign: 'left' }}>
          <ol>
            <li>
              {' '}
              Don't carry and flash large sums of cash, nor exchange money at
              dubious-looking places or with individuals on the street.
            </li>{' '}
            <li>
              {' '}
              Don’t look like a tourist by dressing like one, appearing lost or
              consulting a map in public.
            </li>{' '}
            <li>
              {' '}
              Don’t walk with a bag slung loosely over one shoulder, and keep
              your bag on the opposite side of you from the road to forestall a
              thief on a bike from snatching it.
            </li>{' '}
            <li> Don’t carry a backpack that looks like luggage.</li>{' '}
            <li>
              {' '}
              Don't visit dangerous locations, or walk in unfamiliar, isolated
              or dimly lit areas, especially at night.
            </li>{' '}
            <li>
              {' '}
              Don't leave valuable items in public view; that includes your
              passport as much as your iPhone.
            </li>{' '}
            <li>
              {' '}
              Don't drive an obvious rental car, the more nondescript the
              better; keep maps and travel brochures out of sight in the glove
              compartment.
            </li>{' '}
            <li>
              {' '}
              Don't park anywhere but a well lit place, don't leave valuables in
              sight (lock them in the trunk), and don’t pick-up hitchhikers.
            </li>{' '}
            <li>
              {' '}
              Don’t keep your vehicle and house or hotel keys on the same key
              ring.
            </li>{' '}
            <li>
              {' '}
              Don’t store cash, jewelry, medicine or other valuables in your
              luggage, and never leave your luggage unattended, even for a brief
              moment.
            </li>
          </ol>
        </Card>
      </center>
    </div>
  )
}

export default Dons
