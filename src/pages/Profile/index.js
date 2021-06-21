import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import api from '../../services/api'

import Header from '../../components/Header'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        backgroundColor: theme.palette.background.paper
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: 200,
        height: 200
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#fff'
    },
}));

export default function Profile() {
    const classes = useStyles();

    const user = JSON.parse(localStorage.getItem('@user'))

    const [userName, setUserName] = useState(user.data[0].name)
    const [userEmail, setUserEmail] = useState(user.data[0].email)
    const [userPassword, setUserPassword] = useState(user.data[0].password)


    async function updateUserData() {
        try {
            const data= {
                avatar: `${user.data[0].avatar}`,
                name: `${userName}`,
                email: `${userEmail}`,
                password: `${userPassword}`
            }
            const putResponse = api.put(`http://192.168.0.102:3333/users/${user.data[0].id}`, data)

            const getResponse = await api.get(`/users?email=${userEmail}`);

            if (getResponse.data) {
                localStorage.setItem('@user', JSON.stringify(getResponse))
            } else {
                localStorage.clear()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={classes.container}>
            <Header />
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <div className={classes.paper}>
                    <Avatar
                        alt="Avatar"
                        src={user.data[0].avatar}
                        className={classes.avatar}
                    />

                    <Typography component="h1" variant="h4">
                        Update User Profile
                    </Typography>

                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Your name"
                            name="name"
                            autoComplete="name"
                            onChange={(value) => {
                                setUserName(value.target.value)
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={(value) => {
                                setUserEmail(value.target.value)
                            }}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(value) => {
                                setUserPassword(value.target.value)
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => {
                                updateUserData()
                            }}
                        >
                            Save
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}