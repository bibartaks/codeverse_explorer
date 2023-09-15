/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Navbar from "../components//Navbar"
import Image from "next/image"

export default function page() {
  return (
    <>
      <div className="min-h-[100vh]">
        <div className="pt-40 container m-auto flex justify-between  items-start h-[100%]">
          <div>
            <h1 className="text-4xl mb-5 font-bold">Contact Us</h1>
            <p className="max-w-[700px] leading-[200%] text-justify">
              We'd love to hear from you! We're not really all that evil, and we
              love discussing potential projects, intriguing ideas, and new
              opportunities. Complete the form below or drop us a line at
              <span className="ml-2 underline">
                codeverseexplorer@gmail.com.
              </span>
            </p>
            <form className="mt-5 flex flex-col w-[100%]">
              <textarea
                className="border-2 p-2 mb-5"
                name="message"
                id="message"
                cols="100"
                rows="10"
                placeholder="Enter your message"
              ></textarea>
              <div className="flex justify-between">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="border-2 p-2 w-[35%]"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border-2 p-2 w-[60%]"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white flex self-end px-5 py-2 mt-5 transition-opacity hover:opacity-[0.8]"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <Image src="/contact.svg" width={500} height={500} alt="fuck" />
          </div>
        </div>
      </div>
    </>
  )
}
