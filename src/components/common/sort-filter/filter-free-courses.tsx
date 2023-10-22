"use client"


import { Checkbox } from "@/components/ui/checkbox"

const FilterFreeCourses = () => {

  return (
    <div className="flex items-center gap-4  rounded-xl px-4 py-2 shadow-lg">
      <Checkbox id="free-courses" />
      <label
        htmlFor="free-courses"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        فقط دوره های رایگان
      </label>
    </div>
  )
}

export default FilterFreeCourses;