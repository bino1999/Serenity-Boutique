import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // For navigation
import hero from '../assets/images/hero.jpg'
import ButtonUsage from './ButtonUsage';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({imamge , title  ,Buttontitle , link , }) => {
    
     const navigate = useNavigate();
    const handleClick = () => {
        
        navigate(link)
    }
    return (
        <Box
            sx={{
                height: '100vh', // Full viewport height
                backgroundImage: `url(${imamge})`, // Replace with your image path
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white', // Text color
                textAlign: 'center',
                
            }}
        >
            <Typography variant="h5" gutterBottom sx={{
                    fontSize: '2rem', // Increase text size
                    display: 'block', // Ensure it behaves like a block element
                    whiteSpace: 'normal', // Allow normal wrapping
                    color: 'white', // Text color for visibility
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent black 
                }}>
                {title}
            </Typography>
            

           <Button sx={{color:'#444444', backgroundColor:'#D4AF37'}} onClick={handleClick}>{Buttontitle}</Button>
        </Box>
    );
};

export default HeroSection;