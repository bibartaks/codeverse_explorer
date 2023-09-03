"use client"

import React, { useEffect, useState } from "react"
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"

type Blog = {
  title: string
  aurthor: string
  image: string
  date: string
}

export default function PopularPosts() {
  const [popularBlog, setPopularBlog] = useState<Blog[]>([])

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "popular_blogs"))
      const blogData: any = querySnapshot.docs.map(doc => doc.data())
      setPopularBlog(blogData)
    }

    fetchData()
  }, [])

  console.log(popularBlog)

  return (
    <div className="container m-auto py-10">
      <h1 className=" text-2xl font-semibold mb-5">Popular Posts</h1>
      <div className="container m-auto flex justify-between ">
        {popularBlog.map(blog => (
          <>
            <div>
              <Image
                src={blog.image}
                height={500}
                width={500}
                alt="blog image"
                className="mb-3"
              />
              <div className="flex  mb-2">
                <p className="mr-2">Published: {blog.date},</p>
                <p>
                  Write by:{" "}
                  <span className="font-semibold">{blog.aurthor}</span>
                </p>
              </div>
              <h1 className="max-w-sm	">{blog.title}</h1>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
