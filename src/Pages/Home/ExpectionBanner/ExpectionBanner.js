import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from "../../../images/treatment.png"
import { Button, Container, Typography } from '@mui/material';

const ExpectionBanner = () => {
    return (
        <Container sx={{ p: 4, my: 9 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}
                    sx={{
                        display: 'flex',
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Grid item xs={12} md={4}>
                        <img
                            style={{ maxWidth: 400, height: 400 }}
                            imgFluid src={treatment} alt="" />
                    </Grid>
                    <Grid
                        sx={{
                            textAlign: "left",

                        }}
                        item xs={12} md={8}>
                        <Typography variant="h3" sx={{ p: 5, my: 4 }}>
                            Expectational Dental Care, On Your Terms
                            <Typography>
                                <p sx={{ my: 4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cupiditate voluptatem explicabo vitae deserunt? Minima, esse explicabo tempore nemo neque, veniam asperiores unde illo veritatis reprehenderit perferendis deleniti autem? Temporibus quidem tempore ipsa ducimus </p>
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: "aqua", color: "black" }}>Learn More</Button>
                        </Typography>

                    </Grid>

                </Grid>
            </Box>
        </Container >
    );
};

export default ExpectionBanner;