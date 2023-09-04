import Link from "next/link"
import React from "react"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav
      className={`py-5 px-5 border-b backdrop-blur-xl sticky top-0 ${styles.nav_bg} z-100`}
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
          <Link
            className="mr-10 bg-[#142850] text-white px-4 py-2 rounded-full"
            href="/"
          >
            Sign In
          </Link>
          <Link className="mr-10" href="/">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
