import { collection, getDocs, query, where } from "firebase/firestore"
import React from "react"
import { db } from "../../firebase"
import { allBlogData } from "../../utilities/blogFeacher"
import BlogShowCase from "@/app/components/BlogShowCase/BlogShowCase"

type Blog = {
  title: string
  aurthor: string
  image: string
  date: string
  blog_post: string
  category: string
  like: number
}

async function fetchData(title: string) {
  const q = query(collection(db, "blogs"), where("title", "==", `${title}`))
  const querySnapshot = await getDocs(q)
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

export default async function Blog({ params }: { params: { blog: string } }) {
  const { blog } = params
  const decodedTitle = blog ? decodeURIComponent(blog as string) : ""

  const blogData = await fetchData(decodedTitle)
  console.log(blogData)

  const otherBlogData = await allBlogData()

  const filteredOtherBlogData = otherBlogData
    .slice(0, 5)
    .filter(item => item.title !== blogData[0]?.title)

  return (
    <div className="min-h-[calc(100vh-110px)] max-w-[1400px] m-auto py-20 px-5">
      <BlogShowCase
        img={blogData[0]?.image}
        title={blogData[0]?.title}
        arthur={blogData[0]?.aurthor}
        date={blogData[0]?.date}
        blog_post={blogData[0]?.blog_post}
        category={blogData[0]?.category}
        otherPost={filteredOtherBlogData}
      />
    </div>
  )
}
