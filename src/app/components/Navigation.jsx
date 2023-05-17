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
      <header>
        <nav>
            <ul>
                {links.map(({route, label}) => (
                    <li key={route}>
                    <Link href={route}>{label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
      </header>
    )
}