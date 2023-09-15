import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"
import Link from "next/link"

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

// function encodeURIComponent

export default async function PopularPosts() {
  const popularBlog = await fetchData()

  return (
    <section className="bg-indigo-200 py-20 px-2">
      <div className="w-[90%]  max-w-[1500px] m-auto">
        <h1 className="text-3xl font-semibold mb-5">Popular Posts</h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {popularBlog.map((blog: Blog) => (
            <div key={blog.title}>
              <Link href={`blogs/${encodeURIComponent(blog.title)}`}>
                <Image
                  src={blog.image}
                  width={1000}
                  height={1000}
                  alt="blog image"
                  className="mb-3 w-[500px] h-[auto]"
                  priority
                />
                <div className="flex  mb-2">
                  <p className="mr-2 text-[0.9rem] xl:text-[1rem]">
                    Published: {blog.date},
                  </p>
                  <p>
                    Write by:{" "}
                    <span className="font-semibold">{blog.author}</span>
                  </p>
                </div>
                <h1 className="max-w-sm	font-semibold text-[1rem] xl:text-[1.2rem]">
                  {blog.title}
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
