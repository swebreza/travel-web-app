import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import s1 from '../assets/slide1.jpg'
import s2 from '../assets/slide2.jpeg'
import s3 from '../assets/slide3.jpg'

const slideImages = [
  {
    url: s1,
    caption: 'Taking a boat tour ',
  },
  {
    url: s2,
    caption: 'Taking a boat tour',
  },
  {
    url: s3,
    caption: 'Taking a boat tour',
  },
]

const ImageSilder = () => {
  return (
    <div className='slide-container'>
      <center>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className='each-slide' key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: '213px',
                  borderRadius: '10px',
                  width: '95%',
                  boxShadow: 'initial',
                }}
              >
                <span
                  style={{
                    fontSize: 'large',
                    position: 'relative',
                    top: '50px',
                    left: '20px',
                  }}
                >
                  {slideImage.caption}
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </center>
    </div>
  )
}

export default ImageSilder
