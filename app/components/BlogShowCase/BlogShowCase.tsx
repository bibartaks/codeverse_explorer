import React from "react"
import Image from "next/image"
import Link from "next/link"

type OtherPost = {
  image: string
  title: string
  author: string
  date: string
  blog_post: string
  category: string
}

export default function Blog({
  img,
  title,
  author,
  date,
  blog_post,
  otherPost,
}: {
  img: string
  title: string
  author: string
  date: string
  blog_post: string
  category: string
  otherPost: any
}) {
  return (
    <>
      <div className="max-w-[1600px] px-5 flex flex-col lg:flex-row xl:flex-row xll:flex-row">
        <div className="mr-20 w-[100%]">
          <Image src={img} alt="Blog Image" width={1000} height={1000} />
          <h1 className="font-bold py-5 text-2xl">{title}</h1>
          <p className="pb-3 max-w-[1000px] text-gray-600 font-semibold">
            {author}, {date}
          </p>

          <p className="lg:text-justify xl:text-justify xll:text-justify leading-[200%]">
            {blog_post}
          </p>
        </div>

        <div className="mt-10 lg:mt-0 xl:mt-0 xll:mt-0">
          <h1 className="text-1xl font-bold mb-4">Other blogs you may like</h1>
          <div className="md:grid md:gap-7 md:grid-cols-2 lg:block xl:block xll:block">
            {otherPost.map((post: OtherPost) => (
              <Link href={`/blogs/${post?.title}`} key={post?.title}>
                <div className="mb-7" key={post?.title}>
                  <Image
                    src={post.image}
                    alt="blog image"
                    width={400}
                    height={400}
                    className="mb-2"
                  />
                  <h1>{post.title}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
