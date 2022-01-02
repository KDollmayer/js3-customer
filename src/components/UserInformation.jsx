import React, { useEffect, useContext} from 'react'
import { ContextUser } from '../App'



export default function UserInformation() {
    const {user, setUser} = useContext(ContextUser)
    useEffect(() => {
const url = "https://frebi.willandskill.eu/api/v1/me"
const token = localStorage.getItem("token")
const headers = { "Content-Type": "application/json",
 "Authorization": `Bearer ${token}`}
fetch(url, {
    method: "GET",
    headers: headers
})
.then(res => res.json())
.then(data => setUser(data))
    }, [])
    return (
        <div>
            {user && 
            ( <>
                
                <ul>
                    <li>{user.firstName} {user.lastName} </li>
                    <li> Your Email: {user.email} </li>
                </ul>
                </>
            )
            
            }
            </div>
    )
}