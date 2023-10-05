import Link from "next/link"
import React, { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import SignIn from "../SignUp/SignUp"
import Image from "next/image"
import SignInNavBtn from "../SignInNavBtn/SignInNavBtn"

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-[#E4F1FF]">
      <div className="flex justify-between items-center m w-[90%] m-auto max-w-[1500px]   px-2 py-4">
        <div>
          <h1 className="font-light tracking-[3px]">CodeVerse Explorer</h1>
        </div>
        <div className="hidden lg:flex items-center">
          <Link className="mr-10" href="/">
            Home
          </Link>
          <Link className="mr-10" href="/">
            Programming
          </Link>

          <Link className="mr-10" href="/contact">
            Contact Us
          </Link>
          <Link className="mr-10" href="/addblog">
            Write Blog
          </Link>
          {/* <Link
            className="mr-5 bg-[#9400FF] px-3 py-1 text-white rounded-full hover:opacity-90"
            href="/profile"
          >
            Profile
          </Link> */}
          <SignInNavBtn />
        </div>
        <div className="block lg:hidden xl:hidden 2xl:hidden">
          <Image
            src="/mobile_menu.png"
            height={42}
            width={42}
            alt="mobile menu image"
          />
        </div>
      </div>
    </nav>
  )
}
