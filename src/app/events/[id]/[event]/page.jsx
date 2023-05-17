import data from '../../../../../data/data.json'
import Image from 'next/image'

export default function Event({params}){
    const {event} = params
    const even = data.allEvents.find(e => e.id === event)
    console.log(event , even)
    return (
        <div>
            <Image width={300} height={300} src={even.image} alt={even.title}></Image>
            <h1>{even.title}</h1>
            <p>{even.description}</p>
        </div>
    )
}