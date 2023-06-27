import { Box, Card, Grid } from '@mui/material'
import React from 'react'
import react from '../Images/react-1.png'
import node from '../Images/nodejs-1.png'
import java from '../Images/java-1.png'
import js from '../Images/js-1.png'
import py from '../Images/py.png'
import sql from '../Images/sql.png'
import mongo from '../Images/mongo1.png'
import net from '../Images/net.png'
import git from '../Images/Git.png'
import Loader from '../Components/Loader'
import { Container } from 'react-bootstrap'


function Tech() {
    return (
        <>
            <Box padding={2} >
                <Container >
                    <h2 style={{ fontFamily: 'Belanosima', }}>Technologies and Tools I'm familier with,</h2>
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={3} md={2} >
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={react}
                                    height='80%'
                                    width='70%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={node}
                                    height='80%'
                                    width='80%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={java}
                                    height='90%'
                                    width='80%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={js}
                                    height='80%'
                                    width='70%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={py}
                                    height='80%'
                                    width='60%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={sql}
                                    height='70%'
                                    width='80%'
                                    style={{ margin: '20px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={mongo}
                                    height='80%'
                                    width='80%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={git}
                                    height='80%'
                                    width='75%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Card style={{ display: 'flex', justifyContent: 'center', height: '100%', borderRadius: '30px', backgroundColor: '#0F2027' }}>
                                <img
                                    src={net}
                                    height='80%'
                                    width='75%'
                                    style={{ margin: '15px' }}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Loader />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Tech