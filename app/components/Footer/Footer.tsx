import React from "react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-5 border-t">
      <div className="container m-auto flex justify-between">
        <div>
          <h1 className="text-white text-2xl font-bold">Codeverse Explorer</h1>
        </div>
        <div className="">
          <div className="flex text-white">
            <p className="mr-5">TW</p>
            <p className="mr-5">IN</p>
            <p className="mr-5">LN</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
