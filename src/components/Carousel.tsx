import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Box from '@mui/material/Box';
import nft from '../assets/nfts/1.png'
import nft2 from '../assets/nfts/2.png'
import nft3 from '../assets/nfts/3.png'
import nft4 from '../assets/nfts/4.png'
import nft5 from '../assets/nfts/5.png'
import nft6 from '../assets/nfts/6.png'
import nft7 from '../assets/nfts/7.png'
import nft8 from '../assets/nfts/8.png'
import nft9 from '../assets/nfts/9.png'
import nft10 from '../assets/nfts/10.png'
import nft11 from '../assets/nfts/11.png'
import nft12 from '../assets/nfts/12.png'
import nft13 from '../assets/nfts/13.png'
import nft14 from '../assets/nfts/14.png'
import nft15 from '../assets/nfts/15.png'
import nft16 from '../assets/nfts/16.png'
import nft17 from '../assets/nfts/17.png'
import nft18 from '../assets/nfts/18.png'
import nft19 from '../assets/nfts/19.png'
import nft20 from '../assets/nfts/20.png'
import nft21 from '../assets/nfts/21.png'


const NftCarousel = () => {
    return (
    <Box
    sx={{
        height: { xs: 400, md: 450 },
        width: { xs: 300, md: 400 },
        '.carousel-slider': {
            border: '8px solid white',
            borderRadius: '2.5%',
            margin: '20% 0 0 0!important'
        }
    }}
    >
        <Carousel
            autoPlay={true}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            className='my-carousel'
            // style={{ borderRadius: '50%'}}
            // swipeable={false}
        >
            <div>
                <img src={nft} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft2} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft3} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft4} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft5} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft6} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft7} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft8} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft9} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft10} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft11} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft12} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft13} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft14} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft15} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft16} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft17} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft18} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft19} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft20} alt='high panda in a carousel'/>
            </div>
            <div>
                <img src={nft21} alt='high panda in a carousel'/>
            </div>
        </Carousel>
    </Box>
    )
}


export default NftCarousel