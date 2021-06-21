import React, { useState, useEffect } from 'react';
import {
    Box,
    Toolbar,
    Typography,
    Grid,
    Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import Header from '../../components/Header';
import useStyles from './styles';

import waves from '../../assets/waves.png'
import splash from '../../assets/splash.png'

function Home() {
    const classes = useStyles()

    const [data, setData] = useState([])

    useEffect(() => {
        async function getRadios() {
            try {
                const response = await api.get(`/radios`);

                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getRadios()
    }, [])

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.image}>
                <img
                    style={{ width: '100%', height: 25 }}
                    alt="Svg"
                    src={waves}
                />

                <div style={{ marginTop: '23vh', marginLeft: '5vh' }}>
                    <img
                        style={{ opacity: 0.8, position: 'absolute' }}
                        alt="Splash"
                        src={splash}
                    />
                </div>

            </div>

            <div className={classes.collections}>
                <Box p={8}>
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                        className={classes.h2}
                    >
                        Your Collections
                    </Typography>

                    <Grid container spacing={3}>
                        {
                            data.map((item) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <Link to={{
                                            pathname: `/details/${item.id}`,
                                        }}>
                                            <img
                                                className={classes.card}
                                                alt={item.title}
                                                src={item.avatar}
                                            />
                                        </Link>

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
                </Box>
                <div className={classes.showMoreButton}>
                    <Button variant="outlined" color="primary">
                        Show More
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;