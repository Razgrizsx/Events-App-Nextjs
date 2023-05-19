'use client'

import React, {useRef, useState} from "react"

export default function Form({event}){
    const email = useRef() 
    let [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const emailvalue = email.current.value
        try {
            const res = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailvalue, id: event})
            })
            if(!res.ok){
                throw new Error(`Error: ${res.status}`)
            }
            const data = await res.json()
            setMessage(data)

            console.log('POST', data)
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <form  className='email_registration' onSubmit={onSubmit}>
            <label>Get Registered For This Event</label>
            <input ref={email} type="email" id='email' placeholder='insert Email'/><button>Submit</button>    
            {message ? <div>{message}</div> : <div></div>}
        </form> 
    )
}