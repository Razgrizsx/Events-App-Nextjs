import data from '../../../../../data/data.json'
import Image from 'next/image'
import './event.css'

export default function Event({params}){
    const {event} = params
    const even = data.allEvents.find(e => e.id === event)
    console.log(event , even)
    return (
        <div>
            <Image width={1300} height={500} src={even.image} alt={even.title} ></Image>
            <h1>{even.title}</h1>
            <p>{even.description}</p>
        </div>
    )
}