import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"



function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="https://links.papareact.com/a943ae" alt="disney logo"
        width={120}
        height={100}
        className="cursor-pointer invert-0 dark:invert"
        
        />

      </Link>
      <div className="flex space-x-2">
        <ThemeToggler/>

      </div>
      
    </header>
  )
}

export default Header
