"use client"

import Link from "next/link"
import React, { useState, useEffect, use } from "react"
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth"
import { app } from "../../firebase"
import { redirect } from "next/navigation"

export default function SignIn() {
  const auth = getAuth(app)
  const [user, setUser] = useState<boolean | null>(null)

  onAuthStateChanged(auth, user => {
    if (user) {
      setUser(true)
    } else {
      setUser(null)
    }
  })

  async function handleSignIn() {
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      console.log("Google Sign-In successful:", user)
    } catch (error) {
      console.error("Google Sign-In error:", error)
    }
  }

  return (
    <>
      {user && (
        <Link
          className="bg-[#3564c4] px-2 py-1   text-white rounded-full transition-opacity hover:opacity-[0.8]"
          href={"/profile"}
        >
          Profile
        </Link>
      )}{" "}
      {!user && (
        <Link
          href={"/#"}
          onClick={handleSignIn}
          className="bg-[#3564c4] px-2 py-1   text-white rounded-full transition-opacity hover:opacity-[0.8]"
        >
          Sign In
        </Link>
      )}
    </>
  )
}
