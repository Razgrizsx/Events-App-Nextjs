import Image from 'next/image'
import Link from 'next/link'
import s from '@/app/page.module.css'

export default function HomePage({data}){
    return(
        <main>
        <div>
          {data.events_categories.map(({id, title, description, image}) => {
            return (
              <div>
                <Image width={190} height={190} src={image} alt={title} />
                <Link key={id} href={`/events/${id}`}><h2>{title}</h2></Link>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
      </main>
    )
}
