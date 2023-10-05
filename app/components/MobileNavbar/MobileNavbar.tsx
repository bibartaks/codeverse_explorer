"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SignInNavBtn from "../SignInNavBtn/SignInNavBtn"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  function handleOpenMenu() {
    setOpen(!open)
  }
  return (
    <div className="flex items-center">
      <Image
        className="mr-2"
        onClick={handleOpenMenu}
        src="/mobile_menu.png"
        height={42}
        width={42}
        alt="mobile menu image"
      />
      <SignInNavBtn />
      {open ? (
        <div className="absolute right-0 top-[100%] flex flex-col w-[200px] bg-white px-5 py-5 border border-black mr-2">
          <Link className="mb-5" href="/" onClick={handleOpenMenu}>
            Home
          </Link>
          <Link className="mb-5" href="/blogs" onClick={handleOpenMenu}>
            Blogs
          </Link>
          <Link className="mb-5" href="/contact" onClick={handleOpenMenu}>
            Contact Us
          </Link>
          <Link className="mb-5" href="/addblog" onClick={handleOpenMenu}>
            Write Blog
          </Link>
          {/* <Link
            className="mr-5 bg-[#9400FF] px-3 py-1 text-white rounded-full hover:opacity-90"
            href="/profile"
          >
            Profile
          </Link> */}
        </div>
      ) : null}
    </div>
  )
}
