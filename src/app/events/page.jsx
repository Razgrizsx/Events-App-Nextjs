import data from '../../../data/data.json'
import Image from 'next/image'
import Link from 'next/link'


export default function Events(){
    return (
        <div>
            <h1>Events Page</h1>
            <main>
        <div>
          {data.events_categories.map(({id, title, description, image}) => {
            return (
              <div>
                <Image width={190} height={190} src={image} alt={title} />
                <Link href={`/events/${id}`}><h2>{title}</h2></Link>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </main>
        </div>
    )
}