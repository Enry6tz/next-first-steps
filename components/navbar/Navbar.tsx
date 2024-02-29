import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."
const navItems =  [
  {path:'/pricing', text:'Pricing'},
  {path:'/about', text:'About'},
  {path:'/contact', text:'Contact'}
]
export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-20 p-2 m-2 rounded">
        <Link href={'/'}>
            <HomeIcon />
        </Link>
        <div className="flex flex-1"></div>
        {
          navItems.map(item => (
            <ActiveLink key={item.path} {...item} />
          ))
        }
       
    </nav>
  )
}
