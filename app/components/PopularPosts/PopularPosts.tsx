import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import Image from "next/image"

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

export default async function PopularPosts() {
  const popularBlog = await fetchData()

  return (
    <section className="bg-indigo-200 py-20">
      <div className="container m-auto py-10">
        <h1 className=" text-3xl font-semibold mb-5">Popular Posts</h1>
        <div className="container m-auto flex justify-between ">
          {popularBlog.map((blog: Blog) => (
            <div key={blog.title}>
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
                  Write by: <span className="font-semibold">{blog.author}</span>
                </p>
              </div>
              <h1 className="max-w-sm	 font-semibold text-[1.2rem]">
                {blog.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
