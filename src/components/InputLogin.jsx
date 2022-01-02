import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { FlexInline } from './Flex'

import { Input } from './Input'

export default function LoginPage() {
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

  
    function handleOnSubmit(e) {
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const payload = {email, password}
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            localStorage.setItem("token", token)
            token && navigate("/home")
            
        })
    }

    return (
        <FlexInline>
            Login
          
            <form onSubmit={handleOnSubmit}>
               
                <Input 
                    type="text" 
                    value={email}  
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email"
                />
                <Input 
                    type="password" 
                    value={password}  
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password"
                />
               
                <Button type="submit">Login</Button>
            </form>
        </FlexInline>
    )
}
