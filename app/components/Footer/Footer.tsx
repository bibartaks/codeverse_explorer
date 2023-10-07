import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-3 px-2 border-t">
      <div className="container m-auto flex justify-between items-center text-white text-sm">
        <div>
          <h1>
            Crafted with strength 💪 and love 💗 by
            <Link className="ml-2" href="https://bibartaks.vercel.app/">
              @bibartaks
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  )
}
