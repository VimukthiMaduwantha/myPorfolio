import { Box, Grid, Tooltip } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Container } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '14%', }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://www.linkedin.com/in/vimukthi-maduwantha-40a163227/' target='_blank'>
                            <LinkedInIcon style={{ fontSize: '100px', color: 'black', backgroundColor: '#0F2027', borderRadius: '15px' }} />
                        </a>
                    </Grid>
                    <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://github.com/VimukthiMaduwantha' target='_blank'>
                            <GitHubIcon style={{ fontSize: '100px', color: 'black', backgroundColor: '#0F2027', borderRadius: '15px' }} />
                        </a>
                    </Grid>
                    <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://www.instagram.com/vimukthi_326/' target='_blank'>
                            <InstagramIcon style={{ fontSize: '100px', color: 'black', backgroundColor: '#0F2027', borderRadius: '15px' }} />
                        </a>
                    </Grid>
                    <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href='https://web.facebook.com/vimukthi.maduwantha.564' target='_blank'>
                            <FacebookIcon style={{ fontSize: '100px', color: 'black', backgroundColor: '#0F2027', borderRadius: '15px' }} />
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </ >
    )
}

export default Contact