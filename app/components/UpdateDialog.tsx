'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaArrowRight } from "react-icons/fa"
import { z } from "zod"

export function UpdateDialog() {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger
  } = useForm<ScoreSchemaType>({
    resolver: zodResolver(scoreSchema),
  })

  const onSubmit = async () => {
    const isValid = await trigger()
    console.log(getValues())
    if (isValid) {
      setOpen(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-blue-900">
            Update
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex justify-between mx-4">
              <DialogTitle className="font-bold text-2xl">Update Scores</DialogTitle>
              <Image src={'/html.png'} alt="html logo" width={30} height={30} className="aspect-auto" />
            </div>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-start gap-4">
              <Label htmlFor="name" className="text-right flex gap-2 items-center">
                <Badge className="bg-blue-900 rounded-full">1</Badge>
                <p>Update your <span className="font-bold">Rank</span></p>
              </Label>
              <div>
                <Input type='number' id="rank" {...register('rank')} />
                {errors.rank && <small className="text-red-600">{errors.rank.message}</small>}
              </div>
            </div>
            <div className="grid grid-cols-2 items-start gap-4">
              <Label htmlFor="name" className="text-right flex gap-2 items-center">
                <Badge className="bg-blue-900 rounded-full">2</Badge>
                <p>Update your <span className="font-bold">Percentile</span></p>
              </Label>
              <div>
                <Input type='number' id="percentile" {...register('percentile')} />
                {errors.percentile && <small className="text-red-600">{errors.percentile.message}</small>}
              </div>
            </div>
            <div className="grid grid-cols-2 items-start gap-4">
              <Label htmlFor="name" className="text-right flex gap-2 items-center">
                <Badge className="bg-blue-900 rounded-full">3</Badge>
                <p>Update your <span className="font-bold">Current Score (out of 15)</span></p>
              </Label>
              <div>
                <Input type='number' id="currentScore" {...register('currentScore')} />
                {errors.currentScore && <small className="text-red-600">{errors.currentScore.message}</small>}
              </div>
            </div>
          </div>
          <DialogFooter>
            <div className="ml-auto flex gap-4">
              <DialogClose className="border px-3 rounded-md">
                Cancel
              </DialogClose>
              <Button type="submit" onClick={onSubmit} className="bg-blue-900 w-fit">
                <p>save</p>
                <FaArrowRight />
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}

const scoreSchema = z.object({
  rank: z.number({ coerce: true }).min(1, 'rank cannot be empty'),
  percentile: z.number({ coerce: true }).min(1, 'percentile cannot be empty').max(100, 'percentile cannot exceed 100%'),
  currentScore: z.number({ coerce: true }).min(1, 'score cannot be empty').max(16, 'score cannot be above 15')
})

type ScoreSchemaType = z.infer<typeof scoreSchema>