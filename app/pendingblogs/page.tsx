"use client"

import React, { useState, useEffect } from "react"
import { db, app } from "../firebase" // Import Firestore from your firebase.js file
import { collection, getDocs, query, where } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import LoadingSkeletonPendingBLog from "../components/LoadingSkeletonPendingBLog/LoadingSkeletonPendingBLog"

export default function PendingBlogs() {
  const auth = getAuth(app)
  const [userBlogs, setUserBlogs] = useState<any>([])
  const [userId, setUserId] = useState<number | string>()
  console.log(userId)
  const [loading, setLoading] = useState(true)
  const lol = userId

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.reloadUserInfo.localId)
      } else {
        setUserId(null)
      }
    })

    if (lol) {
      const userBlogPostsCollectionRef = collection<any>(
        db,
        "users_blogs",
        lol,
        "blog_posts"
      )

      const q = query(userBlogPostsCollectionRef)

      getDocs(q)
        .then(querySnapshot => {
          const blogs: any = []
          querySnapshot.forEach(doc => {
            // Extract data from each document
            const blogData = doc.data()
            console.log(blogData)
            blogs.push(blogData)
          })
          // Convert the date strings into JavaScript Date objects for sorting
          blogs.forEach(blog => {
            blog.timestamp = new Date(blog.date).getTime()
          })
          // Sort the blogs by timestamp in descending order (newest first)
          blogs.sort((a: any, b: any) => b.timestamp - a.timestamp)
          // Set the user's blogs in the state and set loading to false
          setUserBlogs(blogs)
          setLoading(false)
        })
        .catch(error => {
          console.error("Error getting blogs: ", error)
          setLoading(false) // Set loading to false in case of an error
        })
    }
  }, [lol])

  return (
    <>
      <div className="py-20 container m-auto">
        <h2 className="text-3xl font-bold mb-5">Your Submitted Blogs:</h2>
        {loading ? (
          <div className="min-h-[calc(100vh-110px)]">
            {
              Array(5)
                .fill(5)
                .map((_, index) => (
                  <LoadingSkeletonPendingBLog key={index} />
                )) // Display a loading indicator while fetching data
            }
          </div>
        ) : (
          userBlogs.map((blog, index: any) => (
            <div key={index} className="border py-5 px-5 mb-5">
              <h3 className="mb-5 text-2xl">
                <span className="font-bold">Title:</span> {blog.title}
              </h3>
              <p className="mb-5 bg-indigo-500 inline-block px-2 py-2 text-white">
                <span className="font-bold text-sm">Category:</span>{" "}
                {blog.category}
              </p>
              <p className="text-justify leading-[200%]">
                <span className="font-bold">Blog Content:</span> {blog.content}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  )
}
