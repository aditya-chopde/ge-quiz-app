"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Question } from "@/data/questions"

interface QuizContainerProps {
  questions: Question[]
  onComplete: (answers: number[], score: number) => void
}

export default function QuizContainer({ questions, onComplete }: QuizContainerProps) {

  // 🔥 Shuffle the questions ONCE when the quiz loads
  const shuffledQuestions = useMemo(() => {
    const arr = [...questions]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [animateQuestion, setAnimateQuestion] = useState(true)

  // Use shuffled questions everywhere
  const currentQuestion = shuffledQuestions[currentQuestionIndex]

  const progress =
    ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100

  const correctAnswers = userAnswers.filter(
    (ans, idx) => ans === shuffledQuestions[idx].answer_index
  ).length

  const handleSelectAnswer = (index: number) => {
    if (!isAnswered) {
      setSelectedAnswer(index)
      setIsAnswered(true)
    }
  }

  const handleNext = () => {
    const newAnswers = [...userAnswers, selectedAnswer!]
    setUserAnswers(newAnswers)

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setAnimateQuestion(false)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
        setAnimateQuestion(true)
      }, 300)
    } else {
      const score = newAnswers.filter(
        (ans, idx) => ans === shuffledQuestions[idx].answer_index
      ).length
      onComplete(newAnswers, score)
    }
  }

  const handleSkip = () => {
    const newAnswers = [...userAnswers, -1]
    setUserAnswers(newAnswers)

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setAnimateQuestion(false)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setIsAnswered(false)
        setAnimateQuestion(true)
      }, 300)
    } else {
      const score = newAnswers.filter(
        (ans, idx) => ans === shuffledQuestions[idx].answer_index
      ).length
      onComplete(newAnswers, score)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">

        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{currentQuestionIndex + 1}</div>
                <div className="text-xs text-foreground/60 mt-1">Question</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{correctAnswers}</div>
                <div className="text-xs text-foreground/60 mt-1">Correct</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">{shuffledQuestions.length}</div>
                <div className="text-xs text-foreground/60 mt-1">Total</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="text-xs text-foreground/60 text-center">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Question Card */}
        <Card className={`border-primary/30 bg-card/50 backdrop-blur-sm ${animateQuestion ? "animate-slide-in" : "animate-slide-out"}`}>
          <CardContent className="pt-8">
            <div className="space-y-6">

              {/* Unit and Topic */}
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-primary/15 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  Unit {currentQuestion.unit}
                </span>
                <span className="inline-block bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                  {currentQuestion.topic}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mt-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left font-medium ${
                      selectedAnswer === index
                        ? index === currentQuestion.answer_index
                          ? "border-green-500 bg-green-500/10 text-foreground"
                          : "border-red-500 bg-red-500/10 text-foreground"
                        : isAnswered && index === currentQuestion.answer_index
                          ? "border-green-500 bg-green-500/10 text-foreground"
                          : "border-border bg-card/30 text-foreground hover:border-primary/50 hover:bg-primary/5"
                    } ${!isAnswered ? "cursor-pointer hover:scale-102" : "cursor-not-allowed opacity-80"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedAnswer === index
                            ? index === currentQuestion.answer_index
                              ? "border-green-500 bg-green-500"
                              : "border-red-500 bg-red-500"
                            : isAnswered && index === currentQuestion.answer_index
                              ? "border-green-500 bg-green-500"
                              : "border-border"
                        }`}
                      >
                        {(selectedAnswer === index ||
                          (isAnswered && index === currentQuestion.answer_index)) && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Answer Feedback */}
              {isAnswered && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium animate-scale-in ${
                    selectedAnswer === currentQuestion.answer_index
                      ? "bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/30"
                      : "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/30"
                  }`}
                >
                  {selectedAnswer === currentQuestion.answer_index
                    ? "✓ Correct!"
                    : `✗ The correct answer is: ${currentQuestion.options[currentQuestion.answer_index]}`}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center">
          {!isAnswered ? (
            <Button onClick={handleSkip} variant="outline" size="lg" className="min-w-32 bg-transparent">
              Skip
            </Button>
          ) : (
            <>
              {currentQuestionIndex < shuffledQuestions.length - 1 && (
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transition-all duration-300"
                >
                  Next Question
                </Button>
              )}
              {currentQuestionIndex === shuffledQuestions.length - 1 && (
                <Button
                  onClick={handleNext}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transition-all duration-300"
                >
                  Finish Quiz
                </Button>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  )
}
