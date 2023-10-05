"use client"

import Link from "next/link"
import Image from "next/image"
import React, { Fragment, useEffect, useState } from "react"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { app } from "../../firebase"
import style from "../SignUp/SignUp.module.css"
import { Dialog, Transition } from "@headlessui/react"
import { useRouter } from "next/navigation"
import { FirebaseError } from "firebase/app"

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const auth = getAuth(app)

  async function handleSignInWithEmailAndPassword(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !password) {
      alert("Please fill out all fields.")
      return // Prevent further execution of the function
    }

    if (email && password) {
      try {
        if (!isValidEmail(email)) {
          alert("Invalid email format.")
          return // Prevent further execution of the function
        }
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        // User logged in successfully
        const user = userCredential.user
        setIsOpen(true)
      } catch (error) {
        if (
          error instanceof FirebaseError &&
          error.message.includes("auth/wrong-password")
        ) {
          alert("Wrong Password")
        } else if (
          error instanceof FirebaseError &&
          error.message.includes("auth/user-not-found")
        ) {
          alert("User can't be found")
        } else {
          // Handle other types of errors or display a generic message
          console.error("An error occurred:", error)
        }
      }
    }
  }

  async function handleSignIn() {
    const provider = new GoogleAuthProvider()
    if (!isValidEmail(email)) {
      alert("Invalid email format.")
      return
    }
    try {
      const result = await signInWithPopup(auth, provider)
      setIsOpen(true)
    } catch (error) {
      console.error("Google Sign-In error:", error)
    }
  }

  function closeModal() {
    setIsOpen(false)
    router.push("/profile")
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Congrats sign in completed 🥳
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {/* Now go to your dashboard */}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                      // onClick={isOpen ? router.push("/profile") : null}
                    >
                      Now go to your profile
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 ">
        <div
          className={`p-20 text-white ${style.bg} hidden lg:block xl:block 2xl:block `}
        >
          <div className="h-[100%] max-h-[95%] flex flex-col justify-between">
            <h1 className="text-2xl font-semibold">Codeverse Explorer</h1>
            <h1>“This website help me a lot.”Jhon Doe</h1>
          </div>
        </div>
        <div className="p-5 lg:p-20 xl:p-20 2xl:p-20">
          <div className="flex justify-end">
            <Link
              href="/signup"
              className="font-medium px-5 py-2  cursor-pointer rounded-md text-sm hover:bg-gray-100 "
            >
              SignUp
            </Link>
          </div>
          <div className="h-[80%] flex flex-col justify-center items-center  w-[100%]">
            <h1 className="font-semibold text-2xl mb-2">Login In</h1>
            <p className="mb-5 text-sm">
              Fill the form to login to your account
            </p>
            <form className="min-w-[30%] mb-5">
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
            <p className="text-gray-600  mb-5">OR CONTINUE WITH</p>
            <button
              onClick={handleSignIn}
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
