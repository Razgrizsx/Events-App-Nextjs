import Image from 'next/image'
import Link from 'next/link'

export default function HomePage({data}){
    return(
        <div className='home_body'>
          {data.events_categories.map(({id, title, description, image}) => {
            return (
              <div className='card'>
                <Image width={190} height={190} src={image} alt={title} />
                <div className='content'>
                <Link key={id} href={`/events/${id}`}><h1>{title}</h1></Link>
                <p>{description}</p>
                </div>
              </div>
            )
          })}
        </div>
    )
}
