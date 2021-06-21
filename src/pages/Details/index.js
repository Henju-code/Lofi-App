import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Typography,
    Box,
    Grid,
    Button,
    Divider
} from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import api from '../../services/api';

import Header from '../../components/Header';

import useStyles from './styles';

function Details() {
    const classes = useStyles();
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [radioDetails, setRadioDetails] = useState([]);

    useEffect(() => {
        async function getHighlights() {
            try {
                const response = await api.get(`/highlights`);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getHighlights();
    }, [])

    useEffect(() => {
        async function getDetails() {
            try {
                const response = await api.get(`/radios/?id=${id}`);
                setRadioDetails(response.data[0]);
                console.log(response.data[0]);
            } catch (error) {
                console.log(error);
            }
        }

        getDetails();
    }, [])

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.informationContainer}>

                <img
                    alt=""
                    src={radioDetails.avatar}
                    className={classes.image}
                />

                <Box className={classes.informationContainerText}>
                    <Typography variant="h2" >{radioDetails.title}</Typography>
                    <Typography variant="h5" >{`${radioDetails.views} • ${radioDetails.duration}`}</Typography>


                    <Box className={classes.dividerContainer}>
                        <Divider className={classes.divider} />
                    </Box>

                    <Typography variant="body1" >{radioDetails.description}</Typography>

                    <Button
                        startIcon={<PlayCircleOutlineIcon />}
                        classes={{
                            root: classes.root,
                        }}
                        href={radioDetails.channel}
                    >
                        Listen now
                    </Button>
                </Box>
            </div>

            <Typography variant='h4' className={classes.highlightTitle}>
                Highlights
            </Typography>

            <Box className={classes.dividerContainer}>
                <Divider className={classes.divider} />
            </Box>

            <Grid container justify="center" spacing={3} className={classes.cardContainer}>
                {
                    data.map((item) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} >
                            
                                <Box className={classes.card}>
                                    <img
                                        className={classes.thumbnail}
                                        alt={item.title}
                                        src={item.avatar}
                                    />
                                    <Box>
                                        <Typography
                                            style={{ fontWeight: 600, marginTop: 10 }}
                                            gutterBottom
                                            variant='body1'
                                            color='textPrimary'
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography variant='body2' color='textSecondary'>
                                            {`${item.views} • ${item.duration}`}
                                        </Typography>
                                    </Box>
                                </Box>
                           
                        </Grid>
                    ))
                }
            </Grid>

        </div>
    );
}

export default Details;