import React, { useState } from 'react';
import {
    CssBaseline,
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography
} from '@material-ui/core';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

import api from '../../services/api'

import useStyles from './styles';
import Copyright from './Copyright';



function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailChange(value) {
        setEmail(value.target.value)
    }

    function handlePasswordChange(value) {
        setPassword(value.target.value)
    }

    const getUser = async () => {
        try {
            const response = await api.get(`/users?email=${email}`);

            if (response.data) {
                localStorage.setItem('@user', JSON.stringify(response))
            } else {
                localStorage.clear()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.paperContainer}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} >
                        <LocalCafeIcon fontSize='large' />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(value) => {
                                handleEmailChange(value)
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
                                handlePasswordChange(value)
                            }}
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => getUser()}
                        >
                            Sign In
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

export default Login;