import { collection, getDocs, query, where } from "firebase/firestore"
import React from "react"
import { db } from "../../firebase"
import Image from "next/image"
import { allBlogData } from "../../utilities/blogFeacher"

type Blog = {
  title: string
  author: string
  image: string
  date: string
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
  const otherBlogData = await allBlogData()

  const filteredOtherBlogData = otherBlogData
    .slice(0, 5)
    .filter(item => item.title !== blogData[0]?.title)

  return <div className="flex items-start justify-start"></div>
}
