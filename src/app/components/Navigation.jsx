import Link from "next/link"

const links = [{
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: "Events",
    route: "/events"
  }
  ]

export default function Navigation(){
    return (
        <nav>
            <ul>
                {links.map(({route, label}) => (
                    <li key={route}>
                    <Link key={route} href={route}><p>{label}</p></Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}