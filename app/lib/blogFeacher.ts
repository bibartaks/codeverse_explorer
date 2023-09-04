import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

type Blog = {
  title: string
  aurthor: string
  image: string
  date: string
}

// Javascript blog data
export async function jsBlogData() {
  const q = query(
    collection(db, "blogs"),
    where("category", "==", "javascript")
  )
  const querySnapshot = await getDocs(q)
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

// React blog data
export async function reactBlogData() {
  const q = query(collection(db, "blogs"), where("category", "==", "react"))
  const querySnapshot = await getDocs(q)
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

// AI blog data
export async function aiBlogData() {
  const q = query(collection(db, "blogs"), where("category", "==", "ai"))
  const querySnapshot = await getDocs(q)
  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}
