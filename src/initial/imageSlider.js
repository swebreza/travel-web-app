import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import s3 from '../assets/slide3.jpg'

const slideImages = [
  {
    url: 'https://png.pngtree.com/back_origin_pic/05/06/89/6e270dec6f11931302918d797f0eef7a.jpg',
    caption: 'Taking a boat tour ',
  },
  {
    url: 'https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-travel-promotion-background-creative-synthesis-parent-child-tour-couple-tour-image_13277.jpg',
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
                  width: '98%',
                  boxShadow: 'initial',
                  // backgroundRepeat: 'no-repeat',
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
