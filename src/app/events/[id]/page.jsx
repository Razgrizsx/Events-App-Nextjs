import Link from 'next/link'
import data from '../../../../data/data.json'
import Image from 'next/image'
import '../../general.sass'

export default function Event({params}){
    const {id} = params
    return (
        <div className='event'>
            {
                data.allEvents.map(({id: cityId,title, city, description, image}) => {
                    if(city.toLowerCase()===id){
                        return (
                        <div key={id} className='card'>
                            <Image key={id} width={350} height={300} src={image} alt={title} />
                            <Link key={id} href={`/events/${id}/${cityId}`} city= {city}><h1>{title}</h1></Link>
                            <p>{description}</p>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}