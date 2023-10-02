import React from "react"
import Image from "next/image"
import Link from "next/link"
import SignOut from "../SignOut/SignOut"

export default function UserProfile({ name, photoURL }: any) {
  return (
    <div className="container text-center m-auto py-[10rem] min-h-[100vh]">
      <div>
        <Image
          src={photoURL}
          height={100}
          width={100}
          alt="user profile photo"
          className="rounded-full mb-10 block  m-auto border-2 "
        />
        <h1 className="text-3xl font-semibold mb-5">Welcome, {name}</h1>
        <h4 className="text-1xl mb-10">What you wanna do today?</h4>
        <Link
          className="bg-[#142850] text-white px-5 py-2 mr-5 hover:opacity-[0.8]"
          href={"/addblog"}
        >
          Write a blog
        </Link>
        <Link
          className="bg-[#142850] text-white px-5 py-2 mr-5 hover:opacity-[0.8]"
          href={"/pendingblogs"}
        >
          Pending blog
        </Link>
        <Link
          className="bg-[#142850] text-white px-5 py-2 mr-5 hover:opacity-[0.8]"
          href={"/manageblog"}
        >
          Manage blog
        </Link>
        <SignOut />
      </div>
    </div>
  )
}
