import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
// import { RemoveIcon, AddIcon} from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NftCarousel from './Carousel';
import Video from '../assets/puffpuff.mp4'
import useScreenType from "react-screentype-hook";
import { useConnection } from '../hooks/useConnection';
const Minter = (props: any) => {
    const {connectedState,connectHandler} = useConnection();
    let [mintAmount, setMintAmount ] = useState(0)
    const screenType = useScreenType({
        mobile: 400,
        tablet: 800,
        desktop: 1000,
        largeDesktop: 1600,
      });

    const lowerMintAmount = () => {
        if (mintAmount === 0) {                                                                        
            return
        } else {
           setMintAmount(mintAmount -= 1)
        }
        // useEffect(() => { vidRef!.current!.play(); },[]);
    }

    return (
        <>
        <video 
                loop 
                autoPlay
                preload="auto"
                muted
                // id='video'
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    height: screenType.isMobile ? '150%': '100%',
                    width: '100%',
                    // top: screenType.isMobile ? '-30%': '50%',
                    left: screenType.isMobile ? '' : '50%',
                    // objectFit: 'cover',
                    objectFit: 'cover',
                    transform: screenType.isMobile ? '': 'translate(-50%, 45%)'
                }}
            >
                <source src={Video} type='video/mp4' />
            </video> 
            <Grid 
                ref={props.refFromApp}
                container 
                spacing={2}
                sx={{
                    zIndex: '1',
                    // position: 'relative',
                    height: {  md:'auto' },
                    '.minter-comp': {
                        border: '2px solid black',
                        boxShadow: '4px 4px 0px 1px black',
                        marginX: '10px',
                    },
                    '.mint-buttons': {
                        backgroundColor: '#369332',
                    },
                    '.mint': {
                        backgroundColor: '#369332',
                     
                        borderRadius: '10',
                        width: 200,
                        height: 60,
                    },
                    '.mint:hover': {
                        background: '#67ae64'
                    }
                }}
                alignItems='center'
                justifyContent="space-evenly"

            >
            <Grid
                item
      
            >
                <Stack
                     // container 
                    spacing={5}
                    justifyContent="center"
                    alignItems='center'
                >
                    <Typography style={{ fontSize: 80, fontWeight: 400, color: 'white' }}>0/8,420</Typography>
                    {/* start minter */}
                    <Stack 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            margin: 0,
                        }}
                        spacing={5}
                    >
                        {/* Button */}
                     
                            <Fab
                            color='primary'
                            className='mint-buttons minter-comp'
                            onClick={() => lowerMintAmount()}
                            >
                             <RemoveIcon  fontSize='large' />
                            </Fab>
                        {/* Counter */}
                        <Grid
                        item
                        // md={4}
                        sx={{
                            marginTop: '0px !important',
                       }}
                        >
                            <Box
                                className='minter-comp'
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    minHeight: { xs: 50, sm: 50, md: 50, lg: 50 },
                                    minWidth: { xs:  100, sm: 100, md: 120, lg: 137 },
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography style={{ fontSize: 48, fontWeight: 400, color: 'black' }}>
                                    {mintAmount}
                                </Typography>
                            </Box>
                        </Grid>
                        <Fab
                            color='primary'
                            className='mint-buttons  minter-comp'
                            onClick={() => setMintAmount(mintAmount += 1)}
                            sx={{
                                 marginTop: '0px !important',
                            }}
                        >
                            <AddIcon fontSize='large'/>
                        </Fab>
                    </Stack>
                    <Button
                        color='primary'
                        // variant='extended'
                        className='mint minter-comp'
                    >
                        <Typography 
                            sx={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: '700',
                                fontFamily: 'Roboto'
                            }}
                        >
                            {connectedState.connected ? 'Mint' : 'Connect Wallet'}
                        </Typography>
                    </Button>
                    {/* End minter */}
                </Stack>
            </Grid>
                <Grid item>
                    <NftCarousel />
                </Grid>
            </Grid>
        </>
    )
}

export default Minter