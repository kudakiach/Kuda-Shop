import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

import NavIcon from './NavIcon'
import Searchbar from './Searchbar'
function Navbar() {
  return (
    <div className='h-20 px-4 md:m-auto md:px-16 lg:px-32 xl:px-64 2xl:px-80 relative'>
        {/* Mobile Screen */}
        <div className='md:hidden h-full flex items-center justify-between'>
            <Link href="/">
                <div className='text-2xl tracking-wide'>
                    KUDA
                </div>
            </Link>
            <Menu />
        </div>
        {/* Medium Screen */}
        <div className='hidden md:flex gap-4 items-center justify-between h-full'>
            {/* Left */}
            <div className='flex items-center gap-4 w-1/3'>
                <Link href="/" className='text-2xl tracking-wide'>KUDA</Link>
            </div>
            
            {/* Left */}
            <div className='flex gap-4 '>
                <Searchbar />
                <NavIcon />
            </div>
        </div>
    </div>
  )
}

export default Navbar