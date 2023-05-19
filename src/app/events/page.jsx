import data from '../../../data/data.json'
import Image from 'next/image'
import Link from 'next/link'
import '../general.sass'


export default function Events(){
    return (
        <div>
            <main>
        <div className='event_body'>
          {data.events_categories.map(({id, title, description, image}) => {
            return (
              <div key={id} className='card'>
                <Image key={id} width={300} height={300} src={image} alt={title} />
                <Link key={id} href={`/events/${id}`}><h2>{title}</h2></Link>    
              </div>
            )
          })}
        </div>
      </main>
        </div>
    )
}