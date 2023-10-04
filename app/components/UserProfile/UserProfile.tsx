import React from "react"
import Image from "next/image"
import Link from "next/link"
import SignOut from "../SignOut/SignOut"

export default function UserProfile({ name, photoURL }: any) {
  return (
    <div className="container text-center m-auto py-[15rem] min-h-[calc(100vh-110px)]">
      <div>
        {!photoURL && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[82px] h-[82px] mb-10 block  m-auto"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {photoURL && (
          <Image
            src={photoURL}
            height={100}
            width={100}
            alt="user profile photo"
            className="rounded-full mb-10 block  m-auto border-2 "
          />
        )}
        <h1 className="text-2xl font-semibold mb-5">Welcome, {name}</h1>
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
