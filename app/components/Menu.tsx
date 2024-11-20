import { LuStickyNote } from "react-icons/lu"
import { RiAwardFill, RiBarChartFill } from "react-icons/ri"

export default function Menu() {
  return (
    <nav className="
      col-span-2
      md:h-full
      bg-white md:text-slate-700
      max-md:fixed max-md:z-10 w-full bottom-0
    ">
      <ul className="flex max-md:justify-around md:flex-col mr-2">
        <li className="p-4 flex gap-2 items-center pl-8">
          <RiBarChartFill size={22} />
          <p className="max-md:hidden">Dashboard</p>
        </li>
        <li className="p-4 flex gap-2 items-center pl-8 bg-indigo-100 max-md:rounded-t-full md:rounded-r-full text-indigo-900">
          <RiAwardFill size={22} />
          <p className="max-md:hidden">Skill Test</p>
        </li>
        <li className="p-4 flex gap-2 items-center pl-8">
          <LuStickyNote size={22} />
          <p className="max-md:hidden">Internship</p>
        </li>
      </ul>
    </nav>
  )
}