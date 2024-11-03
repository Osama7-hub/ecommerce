"use client"
import React, { useEffect, useState } from 'react'
import { MyNavbar } from './_components/MyNavbar'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  useEffect(() => {
		setIsLoggedIn(window?.location?.href.toString().includes('sign-in'))
	}, [])
  
  return !isLoggedIn && (
    <div>
      <MyNavbar />
    </div>
  )
}

export default Header
