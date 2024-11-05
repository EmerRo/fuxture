import Image from 'next/image'
import { Button } from "@/components/ui/button"

const courses = [
  { title: "UI/UX Design", lessons: 22, students: "500+", image: "/placeholder.svg?height=200&width=300" },
  { title: "Web Development", lessons: 30, students: "700+", image: "/placeholder.svg?height=200&width=300" },
  { title: "Digital Marketing", lessons: 18, students: "600+", image: "/placeholder.svg?height=200&width=300" },
]

export default function Courses() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Most Popular Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-[#F5F1EB] rounded-lg overflow-hidden shadow-lg">
              <Image src={course.image} width={300} height={200} alt={course.title} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.students} Students</span>
                </div>
                <Button className="w-full bg-[#3A0CA3] hover:bg-[#2A0881] text-white">Enroll Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}