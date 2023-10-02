import React from "react"
import Image from "next/image"
import Footer from "../Footer/Footer"

export default function LandingFooter() {
  return (
    <>
      <div className="bg-[#374151]">
        <div className="container m-auto flex items-center justify-between py-10">
          <div>
            <h1 className="text-white text-5xl font-bold mb-2">
              Adventure Awaits
            </h1>
            <p className="text-gray-300 max-w-xl">
              Embrace the uncertainty of our journey because every twist and
              turn leads to new discoveries
            </p>
          </div>
          <div>
            <Image
              src="/person_3d.webp"
              height={200}
              width={700}
              className="w-[80%] h-[100%] block m-auto "
              alt="person  3d image"
            />
          </div>
        </div>
      </div>
    </>
  )
}
