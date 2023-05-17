import styles from './page.module.css'
import Link from 'next/link'
import data from '../../data/data.json'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
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
      <footer>
        <p>© 2023 Event App - A Spartan Project </p>
      </footer>
    </div>
  )
}
