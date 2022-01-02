import React, { useState } from 'react'
import { Button } from './Button'
import { FlexInline } from './Flex'
import { Grid } from './GridDiv'
import { Input } from './Input'
import { H2 } from './Text'



export default function PostCustomer(props) {
    const [name, setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("")
    const [paymentTerm, setPaymentTerm] = useState(0)
    const [reference, setReference] = useState("")
    const [website, setWebsite] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    function renderInput(type, placeholder, value, setValue) {
        return (
            <Input

                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        )
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        const payload = {
            name,
            organisationNr,
            vatNr,
            paymentTerm,
            reference,
            website,
            email,
            phoneNumber
        }
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => props.onSuccess())



    }

    return (

        <Grid>
            
            <form onSubmit={handleOnSubmit} >
                <FlexInline><H2>Create new customer</H2></FlexInline>
               <FlexInline>{renderInput("text", "Company Name", name, setName)}</FlexInline> 
                <FlexInline>{renderInput("text", "Organisation nr", organisationNr, setOrganisationNr)}</FlexInline> 
               <FlexInline>{renderInput("text", "Vat Nr", vatNr, setVatNr)}</FlexInline> 
               <FlexInline>{renderInput("text", "Reference", reference, setReference)}</FlexInline> 
                <FlexInline>{renderInput("number", "Payment Term ", paymentTerm, setPaymentTerm)}</FlexInline>
               <FlexInline> {renderInput("text", "Website", website, setWebsite)}</FlexInline>
                <FlexInline>{renderInput("text", "...@email.com", email, setEmail)}</FlexInline>
                <FlexInline>{renderInput("text", "Phone number", phoneNumber, setPhoneNumber)}</FlexInline>
                <FlexInline><Button type='submit'>Submit</Button></FlexInline>
            </form>
        </Grid>


    )
}
