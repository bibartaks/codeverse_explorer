import { collection, getDocs } from "firebase/firestore"
import React from "react"
import { db } from "../firebase"

type Blog = {
  title: string
  author: string
  image: string
  date: string
}

async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "popular_blogs"))
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

export default async function Blogs() {
  const popularBlog = await fetchData()
  console.log("hello")
  return <div>Blogs</div>
}
