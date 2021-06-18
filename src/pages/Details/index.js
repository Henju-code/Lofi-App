import React from 'react';
import {
    Grid,
    Typography,
    Box
} from '@material-ui/core'

import Header from '../../components/Header'

import useStyles from './styles';

function Details() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Header />
            <div className={classes.informationContainer}>
                
                <img 
                alt="" 
                src="https://assets.audiomack.com/chillhopmusic/cc6e6e7b5cb46cb0f5d64b81c655630eec51904ba098e4b103f50f7006a5c8bf.jpeg" 
                className={classes.image}
                />

                <Box className={classes.informationCard}>
                    <Typography variant="h2" >ChillHop</Typography>
                    <Typography variant="subtitle1" >14,5m+ views</Typography>
                    <Typography variant="subtitle1" >Duration: 3hrs </Typography>
                

                <Typography variant="body1" >Description: </Typography>   
                </Box>            
            </div>

            <div>
                <h2>Recomendados</h2>
            </div>
        </div>
    );
}

export default Details;