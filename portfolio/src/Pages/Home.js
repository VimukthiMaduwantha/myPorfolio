import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/Home.css'
import myPhoto from '../Images/myPhoto.png'
import ParticlesBg from 'particles-bg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                <Box /* width={1500} */ padding={2}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={7} >
                            <div style={{ marginTop: '25%' }}>
                                <h1 className='intro'>Hello! I'm </h1>
                                <h1 className='intro'>Vimukthi Maduwantha</h1>
                                <p className='dgr'>Undergraduate / Full Stack Dev.</p>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={5} /* style={{ paddingTop: '1%' }} */>
                            <img
                                src={myPhoto}
                                height='auto'
                                width='95%'
                            />
                        </Grid>
                    </Grid>
                    <ParticlesBg type="cobweb" bg={true} />
                </Box>
            </div >
        </>
    )
}

export default Home
