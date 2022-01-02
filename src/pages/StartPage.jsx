import React from 'react'
import InputLogin from '../components/InputLogin'
import {Container} from '../components/Container'
import {Grid} from '../components/GridDiv'
import { Nav } from '../components/NavBar'
import { H1,  } from '../components/Text'

export default function StartPage() {
    return (
        <Container >
        <Nav><H1>Customer register</H1></Nav>
        <Grid> 
            
            
            <InputLogin/>
        </Grid>
        </Container>
    )
}
