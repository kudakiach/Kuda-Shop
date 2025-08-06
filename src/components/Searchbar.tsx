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
    <form className='flex ic justify-between gap-4 p-2 rounded-md flex-1 bg-gray-100' 
    onSubmit={handleSearch} >
        <input type='text' name='name' className="outline-none bg-transparent" placeholder="Search..."/>
        <button>
            <Image
                src={'/search.png'}
                alt=''
                width={16}
                height={16}
                
            />
        </button>
    </form>
  )
}

export default Searchbar
