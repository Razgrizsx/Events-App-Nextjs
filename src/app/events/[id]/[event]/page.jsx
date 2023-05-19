import data from '../../../../../data/data.json'
import Image from 'next/image'
import './event.css'
import React from 'react'
import Form from '@/app/components/Form'

export default function Event({params}){
    const {event} = params
    const even = data.allEvents.find(e => e.id === event)   
  
    return (
        <div className='event_single_page'>
            <Image width={900} height={500} src={even.image} alt={even.title} ></Image>
            <h1>{even.title}</h1>
            <p>{even.description}</p>
            <Form event={event}/>    
        </div>
    )
}