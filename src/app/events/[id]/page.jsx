import Link from 'next/link'
import data from '../../../../data/data.json'
import Image from 'next/image'

export default function Event({params}){
    const {id} = params
    return (
        <div>
            {
                data.allEvents.map(({id: cityId,title, city, description, image}) => {
                    if(city.toLowerCase()===id){
                        return (
                        <div>
                            <Image width={190} height={190} src={image} alt={title} />
                            <Link href={`/events/${id}/${cityId}`} city= {city}><h1>{title}</h1></Link>
                            <p>{description}</p>
                        </div>
                        )
                    }
                })
            }
        </div>
    )
}