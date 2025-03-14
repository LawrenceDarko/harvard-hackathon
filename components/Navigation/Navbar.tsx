'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import Helpers from '@/app/services/helpers'
import Logout from '../Logout'
import { useSession } from 'next-auth/react'
import UserAccount from '../UserAccount'
// import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  // const { user } = useAuthContext()
  const { data: session} = useSession()
  // console.log("USER:", user)
  // console.log('Organization', user?.organization?.name)
  return (
    <nav className='flex items-center flex-between h-full p-3 bg-white border-b shadow-sm'>

      {session?.user?.data?.username && <div className='flex flex-row items-center gap-2'>
        <p className='md:text-lg'>Hello, {session?.user?.data?.username}</p>
        <MdKeyboardDoubleArrowRight className='text-gray-500'/>
        <p className='text-gray-500'>{Helpers.formatDateTimeFromString(Date.now(), true)}</p>
      </div>
      }

      <div className="relative flex items-center">
        <MobileNav />
      </div>
      
      <UserAccount />
    </nav>
  )
}

export default Navbar