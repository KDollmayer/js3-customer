import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCustomer } from '../App'
import { Container } from '../components/Container'
import { FlexInline } from '../components/Flex'
import { Grid } from '../components/GridDiv'
import { Nav } from '../components/NavBar'
import PostCustomer from '../components/PostCustomer'
import { H1, H2 } from '../components/Text'
import UserInformation from '../components/UserInformation'



export default function HomePage() {
    const {customerList, setCustomerList} = useContext(ContextCustomer)
   

    useEffect(() => {
        fetchData()
    }, [])
    function fetchData() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(res => res.json())
            .then(data => setCustomerList(data.results))
            

    }
  

    return (
        <Container>
            <Nav><H1>Customer register</H1> 
             <UserInformation/>
            </Nav>
            
            
           <Grid>
               <PostCustomer onSuccess={fetchData} />
               <form>
               <FlexInline><H2>Customer list</H2></FlexInline>
            {customerList && customerList.map((item, index) => {
                return (
                    <FlexInline key={index} >
                        

                        <Link to={`/customer/${item.id}`}>
                      {item.name}
                      
                        </Link>


                    </FlexInline>

                )
            })}
               </form>
            
            </Grid> 
           
            
            
            



            
        </Container>
    )
}