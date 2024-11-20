import Image from "next/image"
import { FaMap } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="
    border-b bg-white
    px-10 z-10
    flex justify-between items-center
    fixed w-full
    ">
      <div className="
        flex gap-2 items-center
        text-2xl font-bold
      ">
        <FaMap />
        <p>WhatBytes</p>
      </div>
      <div className="
        border p-1 my-4 rounded-md
        flex gap-2 items-center
      ">
        <Image className="rounded-full" src={'/avatar.png'} alt="avatar" width={30} height={30} />
        <p className="font-semibold">
          Rahil Siddique
        </p>
      </div>
    </nav>
  )
}