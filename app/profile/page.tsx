"use client"

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "../firebase"

import React, { useEffect, useState } from "react"
import UserProfile from "../components/UserProfile/UserProfile"
// import UserProfile from "../components/UserProfile/UserProfile"

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(false) // Set loading to false once authentication state is determined
      if (user) {
        setUser(user)
        if (typeof window !== "undefined") {
          localStorage.setItem("user", "true")
        }
      } else {
        setUser(null)
        if (typeof window !== "undefined") {
          localStorage.setItem("user", "false")
        }
      }
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return <div className="min-h-[100vh]"></div> // Show a loading indicator while authentication state is being determined
  }

  return (
    <>
      {!loading &&
        (user ? (
          <UserProfile name={user?.displayName} photoURL={user?.photoURL} />
        ) : (
          <h1>lol</h1>
        ))}
    </>
  )
}
