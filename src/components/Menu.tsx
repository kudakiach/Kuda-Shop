"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Menu() {

  const [open, setOpen] = useState(false);
  return (
    <div>
        <Image 
            src="/menu.png"
            alt=""
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={()=>setOpen((prev) => !prev)}
        /> {
            open && (
                <div className='absolute w-full bg-black top-20 left-0 h-[calc(100vh-80px)] flex flex-col items-center justify-center text-lg gap-4 text-white'>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">New Arrival</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Cart(1)</Link>
                    <Link href="/">Logout</Link>
                </div>
            )
         }
    </div>
  )
}

export default Menu