'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './Active.module.css'
interface props {
    path: string;
    text: string,
}
export const ActiveLink = ({path,text}:props) => {
  const pathName = usePathname();
  
    return (
        <Link 
        className={`${styles.link} ${ (pathName === path)  && styles['active-link']}`}
        href={path}>
             {text}
        </Link>
  )
}
