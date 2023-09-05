import Link from "next/link"
import React, { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import SignIn from "../SignIn/SignIn"

export default function Navbar() {
  return (
    <nav
      className={`py-4 px-5 border-b backdrop-blur-xl sticky top-0 ${styles.nav_bg} z-100`}
    >
      <div className="flex justify-between items-center container m-auto">
        <div>
          <h1 className="text-[1.3rem] font-semibold">CodeVerse Explorer</h1>
        </div>
        <div>
          <Link className="mr-10" href="/">
            Home
          </Link>
          <Link className="mr-10" href="/">
            Programming
          </Link>
          <Link className="mr-10" href="/">
            About Us
          </Link>
          <Link className="mr-10" href="/contact">
            Contact Us
          </Link>
          <Link className="mr-10" href="/">
            Write Blog
          </Link>
          <SignIn />
        </div>
      </div>
    </nav>
  )
}
