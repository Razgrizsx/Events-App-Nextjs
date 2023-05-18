import styles from './page.module.css'
import data from '../../data/data.json'
import HomePage from './components/Home'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <HomePage data={data}/>
    </div>
  )
}
