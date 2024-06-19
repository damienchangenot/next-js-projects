import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

export default function NavBar() {
  return (
    <nav  className='top-0 z-50 w-[92%] mx-auto shadow shadow-white flex justify-between items-center'>
        <Image
        src="/next.svg"
        alt="Next Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full md:w-auto flex items-center px-5'>
        <ul className=' flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
            <li>
              <Link className='border p-2 rounded' href={"/"}>Acceuil</Link>
            </li>
            <li>
              <Link className='' href={'traffic-light'}>Traffic Light</Link>
            </li>
            <li>
              <Link href={'pokemon'}>Pokémon</Link>
            </li>
            <li><a href="">Projets</a></li>
            <li><a href="">Projets</a></li>
        </ul>      
      </div>
      <div>
        <Button variant={'secondary'}>Contact</Button>
      </div>
    </nav>
  )
}
