import React,{useState} from 'react'
import { Link, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar, Box } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url('https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
        backgroundSize: 'cover',
        height: '100vh',
        position: 'relative',
        textAlign: 'center'
    },
    paperStyle: {
        padding :20,
        height:'60vh',
        width:310, 
        margin:"auto",
        opacity: 0.85,
        borderRadius: '5%',
        '&:hover': {
            opacity: 0.75
        }
    },
    textInput: {
        margin: "5px auto",
        padding: '2px',
    },
    btnstyle:{
        margin:'14px 0'
    },
    avatarStyle: {
        backgroundColor: "#ff5533",
    }
}))

function Login() {
    const classes = useStyles()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div className={classes.root}>
        <Box pt={10}>
        <Grid container>
        <Paper elevation={10} className={classes.paperStyle}>
            <Grid align='center'>
                <Avatar className={classes.avatarStyle}><FastfoodIcon /></Avatar>
                <h2>Log In</h2>
            </Grid>
                <TextField  
                    label="Email" 
                    variant="filled"
                    type="email"
                    required
                    values={email}
                    fullWidth
                    className={classes.textInput}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <TextField 
                    label="Password" 
                    variant="filled"
                    type="password"
                    required
                    values={password}
                    fullWidth
                    className={classes.textInput}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link to="#forgot">
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Don't you have an account ?
                     <Link href="/">
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        </Box>
        </div>
    )
}

export default Login
