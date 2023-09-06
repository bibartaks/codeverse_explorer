import Link from "next/link"
import React, { useEffect, useState } from "react"
import styles from "./navbar.module.css"
import SignIn from "../SignIn/SignIn"

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center container m-auto border-b px-4 py-5">
        <div>
          <h1 className="font-semibold">CodeVerse Explorer</h1>
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
