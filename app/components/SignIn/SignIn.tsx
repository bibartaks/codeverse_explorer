"use client"

import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"
import style from "../SignUp/SignUp.module.css"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth(app)

  async function handleSignInWithEmailAndPassword() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      // User logged in successfully
      const user = userCredential.user
      console.log("User logged in:", user)
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.error("Error:", errorCode, errorMessage)
    }
  }

  return (
    <div className="min-h-[100vh] grid grid-cols-2">
      <div className={`p-20 text-white ${style.bg}`}>
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
        <div className="flex justify-end">
          <Link
            href="/signup"
            className="font-medium px-5 py-2  cursor-pointer rounded-md text-sm hover:bg-gray-100 "
          >
            SignUp
          </Link>
        </div>
        <div className="h-[80%] flex flex-col justify-center items-center  w-[100%]">
          <h1 className="font-semibold text-2xl mb-2">
            Login in to your account
          </h1>
          <p className="mb-5">Fill the form to login to your account</p>
          <form className="max-w-[50%] mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 w-[100%] mb-2 rounded-lg text-sm"
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create your password"
              className="border px-4 py-2 w-[100%] mb-5  rounded-lg text-sm"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              onClick={handleSignInWithEmailAndPassword}
              className="bg-[#9c18ff] w-[100%] py-2 text-white text-sm  rounded-lg transition-opacity hover:opacity-80"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-600  mb-5">
            ------------- OR CONTINUE WITH -------------
          </p>
          <button
            //   onClick={handleSignIn}
            className="flex items-center justify-center border min-w-[50%] py-2 text-sm rounded-md  transition-colors hover:bg-gray-100"
          >
            {" "}
            <Image
              src="/google_icon.png"
              width={18}
              height={18}
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
