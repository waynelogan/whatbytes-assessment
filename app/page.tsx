import Image from "next/image"
import { PercentileChart } from "./components/PercentileChart"
import { Progress } from "@/components/ui/progress"
import { UpdateDialog } from "./components/UpdateDialog"
import { QuestionAnalysisChart } from "./components/QuestionAnalysisChart"

export default function Home() {
  return (
    <div className="
      col-span-8
      px-10 py-6
    ">
      <h1 className="mb-5">Skill Test</h1>
      <div className="flex flex-col md:grid grid-cols-5 gap-4">
        <div className="col-span-3 flex flex-col gap-4">
          <div className="
            border rounded-md 
            flex max-md:flex-col gap-2 w-full px-4 py-6
          ">
            <div className="flex gap-2">
              <Image src={'/html.png'} alt="html logo" width={100} height={100} className="aspect-auto" />
              <div>
                <h2 className="font-semibold text-lg leading-loose">Hyper Text Markup Language</h2>
                <p className="text-slate-700">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
              </div>
            </div>
            <UpdateDialog />
          </div>
          <div className="
            border rounded-md
            px-4 py-6
          ">
            <h2 className="font-semibold text-lg leading-loose">Quick Statistics</h2>
            <div className="
              flex max-md:flex-col 
              gap-4 
              md:justify-between  
              max-md:divide-y md:divide-x
              ">
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
              <div className="flex gap-2 max-md:pt-2 md:pl-2">
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
              <div className="flex gap-2 max-md:pt-2  md:pl-2">
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
          <PercentileChart />
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="
            border rounded-md w-full
            px-4 py-6
          ">
            <h2 className="font-semibold text-lg leading-loose">Syllabus Wise Analysis</h2>
            <div className="
            text-slate-700 
              flex flex-col gap-4
            ">
              <div>
                <h4>HTML Tools, Forms, History</h4>
                <div className="flex items-center justify-between gap-2">
                  <Progress value={80} className="[&>*]:bg-blue-600" />
                  <p className="text-blue-600 font-bold">80%</p>
                </div>
              </div>
              <div>
                <h4>Tags & References in HTML</h4>
                <div className="flex items-center justify-between gap-2">
                  <Progress value={60} className="[&>*]:bg-orange-600" />
                  <p className="text-orange-600 font-bold">60%</p>
                </div>
              </div>
              <div>
                <h4>Tables & References in HTML</h4>
                <div className="flex items-center justify-between gap-2">
                  <Progress value={24} className="[&>*]:bg-rose-600" />
                  <p className="text-rose-600 font-bold">24%</p>
                </div>
              </div>
              <div>
                <h4>Tables & CSS Basics</h4>
                <div className="flex items-center justify-between gap-2">
                  <Progress value={96} className="[&>*]:bg-green-600" />
                  <p className="text-green-600 font-bold">96%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="
            border  rounded-md
            px-4 py-6
          ">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg leading-loose">Question Analysis</h2>
              <p className="text-blue-600 font-bold">10/15</p>
            </div>
            <p>
              <span className="font-semibold">You scored 12 questions correct out 15. </span>
              However it still needs some improvements.
            </p>
            <QuestionAnalysisChart />
          </div>
        </div>
      </div>

    </div>
  )
}
