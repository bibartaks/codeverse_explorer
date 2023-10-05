import { collection, getDocs } from "firebase/firestore"
import React from "react"
import { db } from "../firebase"
import Image from "next/image"

type Blog = {
  title: string
  author: string
  image: string
  date: string
}

async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "blogs"))
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

export default async function Blogs() {
  const blogData = await fetchData()
  return (
    <div className="min-h-[100vh] max-w-[1500px] m-auto py-20 px-5">
      <h1 className="text-2xl font-bold mb-5">All Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10">
        {blogData.map(blog => (
          <div key={blog.title}>
            <Image
              src={blog.image}
              alt="blogimage"
              width={1000}
              height={1000}
              className="mb-2"
            />
            <h1 className="mb-2">{blog.title}</h1>
            <p className="text-gray-400">#{blog.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
