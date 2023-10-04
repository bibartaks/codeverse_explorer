"use client"

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "../firebase"

import React, { useEffect, useState } from "react"
import UserProfile from "../components/UserProfile/UserProfile"
import Image from "next/image"

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(false)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center">
        <Image src="/loading.gif" width={80} height={80} alt="lol" />
      </div>
    ) // Show a loading indicator while authentication state is being determined
  }

  return (
    <>
      {!loading &&
        (user ? (
          <UserProfile name={user?.displayName} photoURL={user?.photoURL} />
        ) : null)}
    </>
  )
}
