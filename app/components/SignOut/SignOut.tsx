"use client"

import React from "react"
import { app } from "../../firebase"
import { getAuth } from "firebase/auth"

export default function SignOut() {
  const auth = getAuth(app)
  function handleSignOut() {
    auth.signOut()
  }
  return (
    <button
      className="bg-red-500 px-5 py-2 text-white border-0 transition-opacity hover:opacity-[0.8]"
      onClick={handleSignOut}
    >
      SignOut
    </button>
  )
}
