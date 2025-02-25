import Link from "next/link";
import { ParticlesBackground } from "@/components/particles-background";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, BookOpen, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          <ParticlesBackground />
          <div className="container relative flex flex-col items-center justify-center gap-4 py-20 md:py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
             University Exam Scheduling
              <br />
              Made Simple
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Create conflict-free examination timetables in minutes. Perfect
              for colleges and universities.
            </p>
            <Link href="/generator">
              <Button size="lg" className="mt-4">
                Generate Timetable <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

      
      </div>
    </main>
  );
}
