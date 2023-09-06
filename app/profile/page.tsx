"use client"

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "../firebase"

import React, { useEffect, useState } from "react"
import UserProfile from "../components/UserProfile/UserProfile"

export default  function Profile() {
  const [user, setUser] = useState<any>(null)
  const auth = getAuth(app)

  useEffect(() => {

    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      } 
    })
  }, [auth])


  return (
    <>
    {user ? (
      <><UserProfile name={user?.displayName} photoURL={user?.photoURL}  /></>
    ) : <h1 className="text-2xl font-bold p-5">You have to sign up</h1>}
    </>
  )
}
