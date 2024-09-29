import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="w-full bg-slate-600 p-5 text-center">
        <ul className='flex justify-center'>
            <Link href='/'><li className='m-3 text-white'>Home</li></Link>
            <Link href='/about'><li className='m-3 text-white'>About</li></Link>
            <Link href='/contact'><li className='m-3 text-white'>Contact</li></Link>
        </ul>
    </div>
  )
}
