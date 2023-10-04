"use client"

import React, { useState, FormEvent, useEffect, Fragment } from "react"
import { db, app } from "../firebase" // Import Firestore from your firebase.js file
import { addDoc, collection } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Image from "next/image"
import SignIn from "../components/SignUp/SignUp"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Dialog, Transition } from "@headlessui/react"

interface BlogPost {
  title: string
  category: string
  content: string
  imageUrl: string
  approved: boolean
}

export default function Page() {
  const [user, setUser] = useState<any>(null)

  const [blogAddedClick, setBlogAddedClick] = useState(false)
  const [loading, setLoading] = useState(true)

  const auth = getAuth(app)

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(false) // Set loading to false once authentication state is determined
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    category: "",
    content: "",
    imageUrl: "",
    approved: false,
  })

  const userId = auth.currentUser?.uid

  const handleSubmit = async (e: FormEvent) => {
    setBlogAddedClick(true)
    e.preventDefault()

    if (!userId) {
      console.error("User is not authenticated.") // Handle this error as needed
      return
    }

    const userBlogPostsCollectionRef = collection(
      db,
      "users_blogs",
      userId,
      "blog_posts"
    )

    try {
      await addDoc(userBlogPostsCollectionRef, {
        title: formData.title,
        category: formData.category,
        content: formData.content,
        imageUrl: formData.imageUrl,
        date: new Date().toLocaleTimeString(),
        approved: false,
      })

      // Clear the form data
      setFormData({
        title: "",
        category: "",
        content: "",
        imageUrl: "",
        approved: false,
      })
    } catch (error) {
      console.error("Error adding document: ", error)
    }
  }

  function MyDialog() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
      setBlogAddedClick(false)
    }

    function openModal() {
      setIsOpen(true)
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
                      Your blog has been submited
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Now you can find your blog in the prending section. If
                        we like your blog then we gonna approved it😃
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
        </Transition>
      </>
    )
  }

  if (loading) {
    return (
      <div className="min-h-[100vh] flex flex-col justify-center items-center">
        <Image src="/loading.gif" width={80} height={80} alt="lol" />
      </div>
    ) // Show a loading indicator while authentication state is being determined
  }

  return (
    <div>
      {!loading && (
        <>
          {!user && (
            <div className="h-[40vh] flex flex-col justify-center items-center]">
              <h1 className="text-2xl text-center text-red-500 font-bold">
                Sorry you have to login or sign up to write a blog
              </h1>
            </div>
          )}
          {blogAddedClick ? <MyDialog /> : null}
          <div className="mt-[5rem] min-h-[100vh]">
            {user && (
              <div className="h-[100%]">
                <h1 className="text-3xl text-center font-bold mb-20 tracking-[5px] text-gray-700	">
                  Write a blog
                </h1>
                <div className="h-[100%] flex-col md:flex-row lg:flex xl:flex justify-around items-center container m-auto">
                  <div className="w-[100%]">
                    <Image
                      src="/add_blog.svg"
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>

                  <form
                    className="border w-[100%] flex flex-col items-start px-5 py-5"
                    onSubmit={handleSubmit}
                  >
                    <input
                      id="title"
                      className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
                      type="text"
                      placeholder="Enter your blog title"
                      value={formData.title}
                      onChange={e =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      required
                    />
                    <input
                      className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
                      type="text"
                      placeholder="Enter your blog category"
                      value={formData.category}
                      onChange={e =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      required
                    />
                    <input
                      className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
                      type="text"
                      placeholder="Enter your image url"
                      value={formData.imageUrl}
                      onChange={e =>
                        setFormData({ ...formData, imageUrl: e.target.value })
                      }
                      required
                    />
                    <textarea
                      className="border border-indigo-500 px-2 py-2 w-[80%] mb-5"
                      rows={10}
                      placeholder="Enter your blog content"
                      value={formData.content}
                      onChange={e =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      required
                    ></textarea>
                    <button
                      className="bg-indigo-500 px-5 py-2 text-white rounded-full transition-opacity hover:opacity-[0.8]"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
            <ToastContainer />
          </div>
        </>
      )}
    </div>
  )
}
