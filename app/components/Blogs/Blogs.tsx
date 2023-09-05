import { db } from "../../firebase"
import { collection, getDocs, where } from "firebase/firestore"
import Image from "next/image"
import { jsBlogData, reactBlogData, aiBlogData } from "@/app/lib/blogFeacher"

type Blog = {
  title: string
  aurthor: string
  image: string
  date: string
}

async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "blogs"))

  const blogData: Blog[] = querySnapshot.docs.map(doc => doc.data() as Blog)
  return blogData
}

export default async function Blogs() {
  const jsBlogs = await jsBlogData()
  const reactBlogs = await reactBlogData()
  const aiBlogs = await aiBlogData()

  return (
    <section className="grid  grid-cols-3 container m-auto gap-20 ">
      <div className="container m-auto py-20 ">
        <h1 className="text-2xl font-semibold mb-5 bg-pink-300 py-1 px-2 inline-block">
          Javascript
        </h1>
        <div className="container m-auto grid grid-rows-3 grid-flow-col gap-10 ">
          {jsBlogs.map((blog: Blog) => (
            <>
              <div key={blog.title} className="">
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
      <div className="container m-auto py-20 ">
        <h1 className="text-2xl font-semibold mb-5 bg-green-200 py-1 px-2 inline-block">
          React
        </h1>
        <div className="container m-auto grid grid-rows-3 grid-flow-col gap-10 ">
          {reactBlogs.map((blog: Blog) => (
            <>
              <div key={blog.title} className="">
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
      <div className="container m-auto py-20 ">
        <h1 className="text-2xl font-semibold mb-5 bg-orange-300 py-1 px-2 inline-block">
          AI
        </h1>
        <div className="container m-auto grid grid-rows-3 grid-flow-col gap-10 ">
          {aiBlogs.map((blog: Blog) => (
            <>
              <div key={blog.title} className="">
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
    </section>
  )
}