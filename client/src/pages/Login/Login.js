import React,{useState} from 'react'
import { Link, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Paper, Avatar } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles(theme => ({
    paperStyle: {
        padding :20,
        height:'60vh',
        width:310, 
        margin:"20px auto"
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
        <Grid>
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
                    <Link to="#">
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
    )
}

export default Login
