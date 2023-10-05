"use client"

import { app } from "../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Image from "next/image"

export default function SignInNavBtn() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const storedPhoto =
    typeof window !== "undefined" ? localStorage.getItem("photo") : null
  const [userPhoto, setUserPhoto] = useState<string | null>(
    storedPhoto !== null ? JSON.parse(storedPhoto) : null
  )

  const auth = getAuth(app)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(false)
      if (user) {
        setUser(user)
        localStorage.setItem("photo", JSON.stringify(user?.photoURL))
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [auth])

  if (loading) {
    return (
      <Link
        className=" w-[32px]  animate-pulse bg-slate-400  h-[32px] py-1  text-black   rounded-full hover:opacity-90"
        href="/profile"
      ></Link>
    )
  }

  return (
    <div className="flex">
      {user ? (
        <Link href="/profile">
          {userPhoto && (
            <Image
              src={userPhoto}
              className="rounded-full py-0"
              width={32}
              height={32}
              alt="a"
            />
          )}

          {!userPhoto && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </Link>
      ) : (
        <Link
          className="mr-5 bg-gray-100 px-2  py-1 text-black border border-[#9400FF] rounded-full hover:opacity-90"
          href="/signin"
        >
          Sign In
        </Link>
      )}
    </div>
  )
}
