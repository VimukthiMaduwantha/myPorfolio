import { Box, Card, CardActions, CardContent, Grid, Icon, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import projects from '../Data/projects.json'
import '../Styles/Image.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from 'react-bootstrap'
import GitHubIcon from '@mui/icons-material/GitHub';

function Work() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Container style={{/*  backgroundColor: 'red', */ padding: '30px' }} >
                <h2 style={{ color: 'black', fontWeight: 'bold' }}>My Developed Projects: </h2>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div>
                            <Card style={{ backgroundColor: '#2D4356', color: 'white', marginRight: '15px', }} key={index}>
                                <div className='hover01'>
                                    <figure>
                                        <img
                                            src={project.image}
                                            width='100%'
                                            height='auto'
                                        />
                                    </figure>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', }} >
                                    <div style={{ marginLeft: '5px' }}>
                                        {project.techs.map((tech, index) => (
                                            <span key={index} style={{ marginRight: '6px', backgroundColor: '#526D82', paddingRight: '4px', paddingLeft: '4px', textAlign: 'center', borderRadius: '3px' }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={{}}>
                                        <IconButton href={project.links} target='_blank' >
                                            <Tooltip
                                                title="View Code"
                                                placement='left'
                                                backgroundColor='white'
                                            >
                                                <GitHubIcon />
                                            </Tooltip>
                                        </IconButton>
                                    </div>
                                </div>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography color="textSecondary" component="p" style={{ color: 'white', fontFamily: 'Belanosima' }}>
                                        {project.description.substring(0, 200) + '...'}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </div>
                    ))}
                </Slider>
                {/* </Box > */}
            </Container >

        </>
    )
}

export default Work

