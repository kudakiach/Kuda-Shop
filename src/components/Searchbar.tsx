"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

function Searchbar() {

  const router = useRouter();

  // Function to handle search submission
  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    console.log(name);

    if(name) {
      router.push(`/list?name=${name}`); 
    }
    // Add your search logic here
  }
  return (
    <form className='flex p-1 gap-4 rounded-md w-full' 
    onSubmit={handleSearch} >
        <div className='flex items-center 
            gap-2
            justify-center py-1 
            border border-black rounded-md transition-all duration-200 '>
           <Image
                src={'/search.png'}
                alt=''
                width={16}
                height={16}
               />
          <input type='text' name='name' className="outline-none rounded-md px-2 h-full w-10/12 py-2" placeholder="Search..."/>
       
        </div>
       
        <button className='flex items-center justify-center e w-2/10 px-2 py-2 bg-red-200 rounded-md hover:bg-gray-300 transition-all duration-200' type='submit'>
          Search  
           
        </button>
    </form>
  )
}

export default Searchbar
