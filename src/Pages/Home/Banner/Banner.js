import React from 'react';
import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';

const bannerBg = {
    background: `url(${bg})`,
}
const verticalCentre = {
    display: 'flex',
    alignItems: "center",
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCentre, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum vero maiores necessitatibus officia quis laboriosam nisi est atque, autem accusantium delectus sequi magni asperiores in tempora aliquid facere. Nulla?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "aqua", color: "black" }}> Get Appointment </Button>
                    </Box>


                </Grid>
                <Grid style={verticalCentre} item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container >
    );
};

export default Banner;