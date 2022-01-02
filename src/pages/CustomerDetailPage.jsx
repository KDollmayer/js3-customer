import React, {useEffect, useContext, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContextCustomer } from '../App'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FlexInline } from '../components/Flex'
import { Grid } from '../components/GridDiv'



export default function DetailPage() {

    const [customer, setCustomer ] = useState(null)
    let params = useParams()
    const { customerList } = useContext(ContextCustomer)
    const id = params.id
    const navigate = useNavigate()
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
    
    
    function customerDetailList() {
        setCustomer(customerList.find((item) => item.id == id))
       
      }
      useEffect(() => {
        customerList ? customerDetailList() : navigate("/home")
      }, [])
      
      function handleOnClick() {
          
            fetch(url, {
                method: "DELETE",
                headers: headers,
              }).then((res) => navigate("/home"));
          
          
      }
      function handleOnBackClick() {
          navigate("/home")
      }
  
        
    
    return (

        <Container>
            {customer && 
            <FlexInline>
            <h2>{customer.name}</h2>
            <ul>
                <li>org nr: {customer.organisationNr}</li>
                <li>Vat nr: {customer.vatNr}</li>
                <li>Reference: {customer.reference}</li>
                <li>Payment term(days): {customer.paymentTerm}</li>
                <li>Website: {customer.website}</li>
                <li>Email: {customer.email}</li>
                <li>Phone nr: {customer.phoneNumber}</li>
            </ul>
            <Button onClick={handleOnClick} > Delete </Button>
            <Button onClick={handleOnBackClick} >Back</Button>
            </FlexInline>}
            
           
            
            
        </Container>
    )
}
