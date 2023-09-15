import { collection, getDocs, query, where } from "firebase/firestore"
import React from "react"
import { db } from "../../firebase"
import Image from "next/image"

type Blog = {
  title: string
  author: string
  image: string
  date: string
}

async function fetchData(title: string) {
  const q = query(
    collection(db, "popular_blogs"),
    where("title", "==", `${title}`)
  )
  const querySnapshot = await getDocs(q)
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const { blog } = params
  const decodedTitle = blog ? decodeURIComponent(blog as string) : ""

  const blogData = await fetchData(decodedTitle)

  return (
    <>
      <div className="w-[90%] max-w-[1500px] m-auto py-20 ">
        <h1 className="text-3xl mb-2 font-semibold">{blogData[0].title}</h1>
        <p className="text-gray-500 text-[0.9rem]">
          Write by: {blogData[0].author}
        </p>
        <p className="mb-10 text-gray-500 text-[0.9rem]">
          Published: {blogData[0].date}
        </p>
        <Image
          src={blogData[0].image}
          height={1000}
          width={1000}
          alt="blog image"
          className="mb-10"
        />
        <p className="text-justify leading-[200%] max-w-[1000px]">
          {blogData[0].content}
        </p>
      </div>
    </>
  )
}
