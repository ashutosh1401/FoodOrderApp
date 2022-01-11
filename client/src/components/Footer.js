import React from 'react'
import { Box, Container, Grid} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
        <footer>
            <Box bgcolor="textSecondary">
                <Container maxwidth="lg" >
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1}>HELP</Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Register
                                </Link>
                            </Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Add Resturant
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1}>Resturant</Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Find Resturant
                                </Link>
                            </Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Top Picks
                                </Link>
                            </Box>
                            <Box>
                                <Link to="#contact" color="inherit" >
                                    Lorem
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
        </div>
    )
}

export default Footer
