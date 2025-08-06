"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function NavIcon() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const isLoggedIn = true;

    const handleProfile = () => {
        console.log("clicked")
    }
  return (
    <div className='flex gap-8 flex-row items-center justify-between'>
        <div className='relative'>

       
        <Image 
            src="/profile.png"
            alt=""
            width={22}
            height={22}
            onClick={()=>setIsProfileOpen( (prev)=>!prev)}
        />
        {isProfileOpen && (
            <div className='absolute top-16'>
                {
                    isLoggedIn && (
                        <div>
                            <Link href="/profile">Profile</Link>
                            <div className='mt-2 cursor-pointer'>Logout</div>
                        </div>
                        
                    )||(
                        
                        <div>
                            <Link href="/login">Login</Link>
                        </div>
                    )
                }
               
            </div>
        )}
         </div>
        <div>   
            <Image 
            src="/notification.png"
            alt=""
            width={22}
            height={22}
            onClick={handleProfile}
        />
        </div>
        <div className='relative'>
            <Image 
                src="/cart.png"
                alt=""
                width={22}
                height={22}
                onClick={()=>setIsCartOpen((prev) => !prev)}
            />
            <div className='absolute bottom-4 text-white left-3 w-10/12 h-8/12 bg-[#458921] flex items-center justify-center rounded-xl'>2</div>
        </div>

        
    </div>
  )
}

export default NavIcon