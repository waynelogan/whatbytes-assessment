import { LuStickyNote } from "react-icons/lu"
import { RiAwardFill, RiBarChartFill } from "react-icons/ri"

export default function Menu() {
  return (
    <nav className="
      col-span-2
      h-full
      text-slate-700
    ">
      <ul className="flex flex-col mr-2">
        <li className="p-4 flex gap-2 items-center">
          <RiBarChartFill size={22} />
          <p>Dashboard</p>
        </li>
        <li className="p-4 flex gap-2 items-center bg-indigo-100 rounded-r-full text-indigo-900">
          <RiAwardFill size={22} />
          <p>Skill Test</p>
        </li>
        <li className="p-4 flex gap-2 items-center">
          <LuStickyNote size={22} />
          <p>Internship</p>
        </li>
      </ul>
    </nav>
  )
}