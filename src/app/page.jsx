import data from '../../data/data.json'
import HomePage from './components/Home'

export default function Home() {
  return (
    <div>
      <HomePage data={data}/>
    </div>
  )
}
