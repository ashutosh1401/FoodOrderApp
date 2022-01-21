import React,{useState} from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid, Paper, Avatar, Box } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Navbar from '../../components/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {siginin} from "../../actions/userAction"

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
        height:'auto',
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
    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const {loading, userInfo, error} = userSignin
    let navigate = useNavigate()


    const handleSigin = () => {
        dispatch(siginin(email,password))
        navigate('/')
    }
    return (
        <div className={classes.root}>
            <Navbar />
        <Box pt={8}>
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
                    <Button type='submit' color='primary' style={{color:"#fff",margin:"1em 0em",width:"100%"}} variant="contained" className={classes.btnstyle} fullWidth onClick={handleSigin}>
                        {
                             loading?<CircularProgress size={24} color="secondary"></CircularProgress>:"Sign up"
                        }
                        {/* {
                            userInfo?navigate('/'):''
                        } */}
                    </Button>
                <Typography>
                    <Link to="#forgot">
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Don't you have an account ?
                     <Link to="/signup">
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
