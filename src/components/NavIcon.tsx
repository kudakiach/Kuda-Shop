"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/navigation';
import CartModal from './CartModal';
function NavIcon() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const isLoggedIn = true;
    const router = useRouter();
    const handleProfile = () => {
        if(!isLoggedIn) {
            router.push('/login')
        }
        setIsProfileOpen( (prev)=>!prev)
    }
  return (
    <div className='flex items-center gap-8 relative'>
        
        <Image 
            src="/profile.png"
            alt=""
            width={22}
            height={22}
            onClick={handleProfile}
            className='cursor-pointer'
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
        
         
          
            <Image 
            src="/notification.png"
            alt=""
            width={22}
            height={22}
            className='cursor-pointer'
            onClick={() => alert('Notification Clicked')}
        />
        
        
       
           
                <Image 
                    src="/cart.png"
                    alt="Image cart"
                    width={22}
                    height={22}
                    className='cursor-pointer'
                    onClick={()=>setIsCartOpen((prev) => !prev)}
                />
                <div className='absolute -top-1 text-white text-sm -right-12 w-5 h-5 bg-[#458921] flex items-center justify-center rounded-xl'>2</div>
           
         {isCartOpen && (
                <CartModal />
         )}
        
    </div>
  )
}

export default NavIcon