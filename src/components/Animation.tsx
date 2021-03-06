import Box from '@mui/material/Box';
// import Video from '../assets/mintin.mp4'
import Video from '../assets/mint.mp4'
import ReactPlayer from 'react-player'
import useScreenType from 'react-screentype-hook';

const Animation = (props: any) => {
    const screenType = useScreenType({
        mobile: 400,
        tablet: 800,
        desktop: 1000,
        largeDesktop: 1600,
      });

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            // display: screenType.isMobile ? 'none' : 'block',
        }}>
            <ReactPlayer
                url={Video}
                type='video/mp4' 
                className='high-gif' 
                muted={true}
                playing={true}
                loop={true}
                width='100%'
                height='100%'
            />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 650 , md: 75 },
                        right: { xs: 250 , md: 100 },
                        height: { md: 180, lg: 250 },
                        width: { md: 400, lg: 650 }
                    }}
                    onClick={(e) => props.clickFunction(e)}
                >
                </Box>
        </Box>
    )
}

export default Animation