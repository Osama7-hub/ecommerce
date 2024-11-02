"use client"
import React, { useEffect, useState } from 'react'
import TopNavbar from './_components/TopNavbar'
import { MyNavbar } from './_components/MyNavbar'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState()
  useEffect(() => {
		setIsLoggedIn(window?.location?.href.toString().includes('sign-in'))
	}, [])
  return !isLoggedIn && (
    <div>
      {/* <TopNavbar /> */}
      <MyNavbar />
    </div>
  )
}

export default Header
