"use client"
import React, { Fragment, useState } from "react"
import Image from "next/image"
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { app } from "../../firebase"
import Link from "next/link"
import styles from "./SignUp.module.css"
import { Dialog, Transition } from "@headlessui/react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")
  const [name, setName] = useState("")
  const auth = getAuth(app)
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  async function handleSignIn() {
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      alert("Congrats🥳")
    } catch (error) {
      console.error("Google Sign-In error:", error)
    }
  }

  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  async function handleSignInWithEmailAndPassword(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !password || !name) {
      alert("Please fill out all fields.")
      return
    }

    try {
      if (!isValidEmail(email)) {
        alert("Invalid email format.")
        return
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const currentUser: User | null = auth.currentUser

      if (currentUser) {
        await updateProfile(currentUser, {
          displayName: name,
        })
        console.log("User signed up:", currentUser)
        alert("Congrats🥳 SignIn by email and password")
        setIsOpen(true)
      } else {
        console.error("Error: User not available after signup")
      }
    } catch (error) {
      // Handle Errors here.
      if (error instanceof Error) {
        window.alert(error.message || "An error occurred while signing up.")
        console.error(error)
      } else {
        console.error("Non-Error object encountered:", error)
      }
    }
  }

  return (
    <>
      <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        <div
          className={`p-20 ${styles.bg} text-white  hidden lg:block xl:block 2xl:block`}
        >
          <div className="h-[100%] max-h-[95%] flex flex-col justify-between">
            <h1 className="text-2xl  tracking-wider font-semibold">
              Codeverse Explorer
            </h1>

            <h1>“This website help me a lot.”Jhon Doe</h1>
          </div>
        </div>
        <div className="p-5 lg:p-20 xl:p-20 2xl:p-20">
          <div className="flex justify-end">
            <Link
              href="/signin"
              className="font-medium px-5 py-2  cursor-pointer rounded-md text-sm hover:bg-gray-100 "
            >
              SignIn
            </Link>
          </div>
          <div className="h-[80%] flex flex-col justify-center items-center  w-[100%]">
            <h1 className="font-semibold text-2xl mb-2">Create an account</h1>
            <p className="mb-5 text-sm">
              Complete the Form to Set Up Your Profile
            </p>
            <form
              className="min-w-[30%] mb-5"
              onSubmit={handleSignInWithEmailAndPassword}
            >
              <input
                type="name"
                placeholder="Enter your name"
                className="border px-4 py-2 w-[100%] mb-2 rounded-lg text-sm"
                onChange={e => setName(e.target.value)}
                value={name}
                required
              />
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
                onChange={e => setPassowrd(e.target.value)}
                required
              />
              <button
                // {name && email && password ? null : disabled}
                // disabled={name && email && password ? false : true}
                onClick={handleSignInWithEmailAndPassword}
                className="bg-[#9c18ff] w-[100%] py-2 text-white text-sm  rounded-lg transition-opacity hover:opacity-90"
              >
                Sign Up
              </button>
            </form>
            <p className="text-gray-600 mb-5">OR CONTINUE WITH</p>
            <button
              onClick={handleSignIn}
              type="submit"
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
    </>
  )
}
