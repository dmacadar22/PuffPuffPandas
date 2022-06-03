import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@mui/material';
import { keyframes } from '@mui/system';
// import Video from '../assets/mintin.mp4'
import Video from '../assets/mint.mp4'
import ReactPlayer from 'react-player'

const Animation = () => {
    return (
        <Box sx={{
            height: '100%',
            width: '100%',
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
        </Box>
    )
}

export default Animation