"use client"

import React, { useState, FormEvent, useEffect } from "react"
import { db, app } from "../firebase" // Import Firestore from your firebase.js file
import { addDoc, collection } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Image from "next/image"
import SignIn from "../components/SignIn/SignIn"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface BlogPost {
  title: string
  category: string
  content: string
  imageUrl: string
  approved: boolean
}

export default function Page() {
  const [userIn, setUserIn] = useState<boolean>(false)

  const auth = getAuth(app)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserIn(true)
      } else {
        setUserIn(false)
      }
    })
  }, [])

  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    category: "",
    content: "",
    imageUrl: "",
    approved: false,
  })

  const userId = auth.currentUser?.uid

  console.log(userId)

  const handleSubmit = async (e: FormEvent) => {
    // toast("You blog added")
    toast.success("Blog added")
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

  // const notify = () => toast.success("Blog added")

  return (
    <>
      {!userIn && (
        <div className="h-[40vh] flex flex-col justify-center items-center]">
          <h1 className="text-2xl text-center text-red-500 font-bold">
            Sorry you have to login or sign up to write a blog
          </h1>
        </div>
      )}
      <div className="mt-[5rem]">
        {userIn && (
          <div className="h-[100%]">
            <h1 className="text-3xl text-center font-bold mb-20 tracking-[5px] text-gray-700	">
              Write a blog
            </h1>
            <div className="h-[100%] flex justify-around items-center container m-auto">
              <div className="w-[100%]">
                <Image
                  src="/undraw_blog_post_re_fy5x.svg"
                  width={500}
                  height={500}
                  alt=""
                />
                /{" "}
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
  )
}
