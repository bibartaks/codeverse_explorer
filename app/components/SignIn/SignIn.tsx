"use client"
import React, { useState } from "react"
import Image from "next/image"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth"
import { app } from "@/app/firebase"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")
  const auth = getAuth(app)

  async function handleSignIn() {
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      alert("Congrats🥳")
    } catch (error) {
      console.error("Google Sign-In error:", error)
    }
  }

  async function handleSignInWithEmailAndPassword() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      // User signed up successfully
      const user = userCredential.user
      // console.log('User signed up:', user);
      alert("Congrats🥳 SignIn by email and password")
    } catch (error) {
      // Handle Errors here.
      console.log(error)
    }
  }

  return (
    <div className="min-h-[100vh] grid grid-cols-2">
      <div className="p-20 bg-[#18181B] text-white">
        <div className="h-[100%] max-h-[95%] flex flex-col justify-between">
          <h1 className="text-1xl font-semibold">Codeverse Explorer</h1>
          <h1>
            “This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before.”
            Sofia Davis
          </h1>
        </div>
      </div>
      <div className="p-20">
        <div className="h-[80%] flex flex-col justify-center items-center  w-[100%]">
          <h1 className="font-semibold text-2xl mb-2">Create an account</h1>
          <p className="mb-5">Fill the form to create your account</p>
          <form className="max-w-[50%] mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-1 w-[100%] mb-2 rounded-lg text-sm"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create your password"
              className="border px-4 py-1 w-[100%] mb-5  rounded-lg text-sm"
              onChange={e => setPassowrd(e.target.value)}
              required
            />
            <button
              onClick={handleSignInWithEmailAndPassword}
              className="bg-[#9c18ff] w-[100%] py-1 text-white text-sm  rounded-lg   "
            >
              Sign Up
            </button>
          </form>
          <p className="text-gray-600 mb-5">
            ------------- OR CONTINUE WITH -------------
          </p>
          <button
            onClick={handleSignIn}
            className="flex items-center justify-center border min-w-[50%] py-1 text-sm rounded-md"
          >
            {" "}
            <Image
              src="/google_icon.png"
              width={22}
              height={22}
              alt="google icon"
              className="mr-2"
            />{" "}
            Google
          </button>
        </div>
      </div>
    </div>
  )
}
