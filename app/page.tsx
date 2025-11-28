"use client"

import { useState } from "react"
import { quizData } from "@/data/questions"
import QuizHome from "@/components/quiz-home"
import QuizContainer from "@/components/quiz-container"
import ResultsPage from "@/components/results-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "quiz" | "results">("home")
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [score, setScore] = useState(0)

  const handleStartQuiz = () => {
    setUserAnswers([])
    setScore(0)
    setCurrentPage("quiz")
  }

  const handleQuizComplete = (answers: number[], finalScore: number) => {
    setUserAnswers(answers)
    setScore(finalScore)
    setCurrentPage("results")
  }

  const handleRetry = () => {
    handleStartQuiz()
  }

  const handleHome = () => {
    setCurrentPage("home")
    setUserAnswers([])
    setScore(0)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10">
        {currentPage === "home" && <QuizHome onStart={handleStartQuiz} />}
        {currentPage === "quiz" && <QuizContainer questions={quizData} onComplete={handleQuizComplete} />}
        {currentPage === "results" && (
          <ResultsPage
            questions={quizData}
            userAnswers={userAnswers}
            score={score}
            onRetry={handleRetry}
            onHome={handleHome}
          />
        )}
      </div>
    </main>
  )
}
