import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/Home.css'
// import me from '../Images/me.jpg'
import me from '../Images/me-min.jpg'
import { Card, Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function About() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', placeItems: 'center' }}>
                <Box width={1500} padding={2}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={6}>
                            {/* <Card style={{ display: 'flex', justifyContent: 'center', borderRadius: '20px' }}> */}
                            <img
                                src={me}
                                width='100%'
                                height='auto'
                                style={{ borderRadius: '20px' }}
                            />
                            {/* </Card> */}
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Card style={{ background: '#0F2027', borderRadius: '20px', padding: '10px', maxHeight: '100%' }}>
                                <span style={{ fontSize: '50px', fontFamily: 'Stencil Std, fantasy' }}>Want to know me!</span>
                                <hr style={{ color: 'white' }} />
                                <p style={{ fontFamily: 'Belanosima', fontSize: '20px' }}>
                                    Hi, I am Vimukthi Maduwantha and I am a Software Engineer based in Sri Lanka.
                                    I am an undergraduate in Sri Lanka Institute of Information Technology who dedicated and passionate undergraduate focused on achieving a
                                    successful career in the dynamic and challenging information technology
                                    industry. I am committed to providing exceptional service and delivering high-quality work. I am highly motivated
                                    to achieve perfection in all tasks assigned to me and consistently strive to exceed expectations. I am a responsible and
                                    reliable individual who consistently demonstrates a strong work ethic and gives 100% effort in both my professional and personal endeavors.
                                </p>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div >
        </>
    )
}

export default About
