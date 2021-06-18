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
                console.log(response)
                setData(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getRadios()
    }, [])

    return (
        <div className={classes.root}>
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
                            data.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            className={classes.card}
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

const videos = [
    {
        id: 1,
        title:
            'CHILLHOP',
        channel: 'Lucas Nhimi',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: 'https://th.bing.com/th/id/OIP.vLYQKt-mi1YqlkE1UejqhgHaHa?pid=ImgDet&rs=1',
        thumb: 'https://assets.audiomack.com/chillhopmusic/cc6e6e7b5cb46cb0f5d64b81c655630eec51904ba098e4b103f50f7006a5c8bf.jpeg',
    },
    {
        id: 2,
        title:
            'LO-FI GIRL',
        channel: 'Lucas Nhimi',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://swall.teahub.io/photos/small/193-1931287_lofi-study-girl.jpg',
    },
    {
        id: 3,
        title:
            'LO-FI FOR GHOSTS (ONLY)',
        channel: 'Lucas Nhimi',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://i.ytimg.com/vi/2GjPQfdQfMY/maxresdefault.jpg',
    },
    {
        id: 4,
        title:
            'JAPANASE LO-FI',
        channel: 'Lucas Nhimi',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://damixx.com/wp-content/uploads/2021/01/1610483874_maxresdefault-758x426.jpg',
    },
    {
        id: 5,
        title:
            'TOKYO BEATS',
        channel: 'Lucas Nhimi',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://th.bing.com/th/id/R07e850d8efa96155af9662bd21a32f35?rik=8%2bpLU9zEwsDl4g&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2f8599b38e50e71ea753ebf10cd78513749979b883.jpg&ehk=H%2b8sO%2fJ1Qn%2bxzcplKyKApm5vUUiP1oK9GoM0WRiuMJU%3d&risl=&pid=ImgRaw',
    },
    {
        id: 6,
        title: 'BANF RADIO',
        channel: 'Lucas Nhimi',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://th.bing.com/th/id/R51f92eac098816bb508c72d9f0f8080c?rik=6FrwkzkiXvlajQ&pid=ImgRaw',
    },
    {
        id: 7,
        title:
            'LO-FI CHILL',
        channel: 'Lucas Nhimi',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://th.bing.com/th/id/OIP.fEhL48a9X86OuLQWJ7kNDwHaEK?pid=ImgDet&rs=1',
    },
    {
        id: 8,
        title:
            'CHILLED COW',
        channel: 'Lucas Nhimi',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: 'https://th.bing.com/th/id/OIP.6ftwOFJq_u8HdJIpzIoLQQHaHa?pid=ImgDet&rs=1',
    },
];