import { Button } from "@/components/ui/button"
import Image from "next/image"
import { PercentileChart } from "./components/PercentileChart"

export default function Home() {
  return (
    <div className="
      col-span-8
      px-10 py-6
    ">
      <h1>Skill Test</h1>
      <div className="flex flex-col gap-4">
        <div className="border rounded-md flex gap-2 w-full p-2">
          <Image src={'/html.png'} alt="html logo" width={100} height={40} />
          <div>
            <h2 className="font-bold text-lg leading-loose">Hyper Text Markup Language</h2>
            <p className="text-slate-700">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
          </div>
          <Button>
            Update
          </Button>
        </div>
        <div className="
          border p-2 rounded-md
        ">
          <h2 className="font-bold text-lg leading-loose">Quick Statistics</h2>
          <div className="flex justify-between divide-x">
            <div className="flex gap-2">
              <div className="
                w-12 h-12 flex items-center justify-center text-xl
                bg-slate-200 p-1 rounded-full
              ">
                <p>🏆</p>
              </div>
              <div>
                <p className="font-bold">1</p>
                <small className="text-slate-700">YOUR RANK</small>
              </div>
            </div>
            <div className="flex gap-2 pl-2">
              <div className="
                w-12 h-12 flex items-center justify-center text-xl
                bg-slate-200 p-1 rounded-full
              ">
                <p>🗒️</p>
              </div>
              <div>
                <p className="font-bold">10/15</p>
                <small className="text-slate-700">PERCENTILE</small>
              </div>
            </div>
            <div className="flex gap-2 pl-2">
              <div className="
                w-12 h-12 flex items-center justify-center text-xl
                bg-slate-200 p-1 rounded-full
              ">
                <p>✅</p>
              </div>
              <div>
                <p className="font-bold">10/15</p>
                <small className="text-slate-700">CORRECT ANSWERS</small>
              </div>
            </div>
          </div>
        </div>
        <div className="
          border p-2 rounded-md
        ">
          <div>
            
            <PercentileChart />
          </div>
        </div>
      </div>
    </div>
  )
}
