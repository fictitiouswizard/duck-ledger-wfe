import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function LoginPage() {

    return (
        <Grid container sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                md={7}
                sx={{
                    backgroundImage: 'url(https://placekitten.com/g/1920/1080)',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </Grid>
            <Grid md={5} component={Paper} elevation={6} square>
                <Box sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Avatar sx={{ m: 1 }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant='h5'>
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='username'
                            label="Username"
                            name='username'
                            autoComplete='username'
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to={`/forgot-password`}>
                                    <Typography variant='body2' component='h2'>
                                        Forgot password?
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={`/register`}>
                                    <Typography variant='body2' component='h2'>
                                        {"Don't have an account? Sign Up"}
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default LoginPage
