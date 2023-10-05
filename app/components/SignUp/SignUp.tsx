"use client"
import React, { Fragment, useState } from "react"
import Image from "next/image"
import {
  GoogleAuthProvider,
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

  function openModal() {
    setIsOpen(true)
  }

  console.log(auth.currentUser)
  console.log(email, password)

  async function handleSignIn() {
    console.log("hello")
    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)
      alert("Congrats🥳")
    } catch (error) {
      console.error("Google Sign-In error:", error)
    }
  }

  function isValidEmail(email) {
    // Use a regular expression for email validation
    // This is a basic example, you can use a more comprehensive regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  async function handleSignInWithEmailAndPassword(e) {
    e.preventDefault()

    if (!email || !password || !name) {
      alert("Please fill out all fields.")
      return // Prevent further execution of the function
    }

    console.log("fuck yuou")
    if (email && password && name) {
      try {
        if (!isValidEmail(email)) {
          alert("Invalid email format.")
          return // Prevent further execution of the function
        }
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

        await updateProfile(auth.currentUser, {
          displayName: name,
        })

        // User signed up successfully
        const user = userCredential.user
        console.log("User signed up:", user)
        alert("Congrats🥳 SignIn by email and password")
      } catch (error) {
        // Handle Errors here.
        console.log(error)
      }
    } else {
      console.log("fuck yuou")
      setIsOpen(true)
    }
  }

  return (
    <>
      {/* <Transition appear show={isOpen} as={Fragment}>
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
                    Please fill the form
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      To create your account
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
      <div className="min-h-[100vh] grid grid-cols-2">
        <div className={`p-20 ${styles.bg} text-white`}>
          <div className="h-[100%] max-h-[95%] flex flex-col justify-between">
            <h1 className="text-2xl  tracking-wider font-semibold">
              Codeverse Explorer
            </h1>

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
            <p className="text-gray-600 mb-5">
              ------------- OR CONTINUE WITH -------------
            </p>
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
