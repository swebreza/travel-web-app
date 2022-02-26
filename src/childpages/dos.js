import NavBar from '../Navbar'
import { Card } from 'react-bootstrap'

const Dos = () => {
  return (
    <div>
      <NavBar />
      <h1>Do's</h1>
      <center>
        <Card style={{ width: '60%', padding: '2em', textAlign: 'left' }}>
          <ol>
            <li>
              Do be aware of your surroundings, and watch for suspicious people
              or vehicles.
            </li>
            <li>
              Do use cash substitutes such as traveler's checks or credit cards,
              and only carry as much money as you immediately need.
            </li>
            <li>
              Do lock up valuables you are not taking with you in a safe in your
              room or use your hotel’s safe-deposit box services to store them;
              and lock the windows and doors your hotel room when going out.
            </li>
            <li>
              Do make a note of your passport number; if it becomes lost or
              stolen, knowing the number will speed up getting a replacement.
            </li>
            <li>
              Do make a note of your credit-card numbers and the phone number to
              call in case you need to report it stolen and cancel it.
            </li>
            <li>
              Do dress appropriately for your surroundings as much as you can;
              looking more like a local makes you less of a mark than looking
              like an obvious tourist.
            </li>
            <li>
              Do put a band around your luggage as a safeguard against pilferage
              while in transit; suitcase locks are no barrier to a professional
              thief.
            </li>
            <li>
              Do travel with companions while sightseeing or shopping; there is
              safety in numbers.
            </li>
            <li>
              Do keep vehicle doors locked and windows rolled up when driving.
            </li>
            <li>
              Do be alert for staged distractions, such as someone bumping into
              you, spilling a drink on you, dropping something in front of you
              or causing a loud commotion; an accomplice can steal your
              valuables and walk away while you are momentarily distracted.
            </li>
          </ol>
        </Card>
      </center>
    </div>
  )
}

export default Dos
