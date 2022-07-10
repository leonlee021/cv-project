import React from "react"

export default function Personal(){
    return (
        <>
            <input className = "personal" type="text" id = "address" name = "address" placeholder="Address"/>
            <input className = "personal" type="text" id = "phone-number" name = "phone-number" placeholder="Phone number"/>
            <input className = "personal" type="email" id = "email" name = "email" placeholder="Email"/>
        </>
    )
}