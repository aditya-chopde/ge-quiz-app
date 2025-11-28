"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Question } from "@/data/questions"
import { Progress } from "@/components/ui/progress"

interface ResultsPageProps {
  questions: Question[]
  userAnswers: number[]
  score: number
  onRetry: () => void
  onHome: () => void
}

export default function ResultsPage({ questions, userAnswers, score, onRetry, onHome }: ResultsPageProps) {
  const percentage = Math.round((score / questions.length) * 100)
  const skipped = userAnswers.filter((ans) => ans === -1).length

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: "A+", label: "Outstanding!" }
    if (percentage >= 80) return { grade: "A", label: "Excellent!" }
    if (percentage >= 70) return { grade: "B", label: "Good Job!" }
    if (percentage >= 60) return { grade: "C", label: "Not Bad!" }
    if (percentage >= 50) return { grade: "D", label: "Keep Trying!" }
    return { grade: "F", label: "Study More!" }
  }

  const { grade, label } = getGrade(percentage)

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full space-y-8">
        {/* Score Card */}
        <Card className="border-primary/30 bg-gradient-to-br from-card to-primary/5 backdrop-blur-sm overflow-hidden animate-slide-in">
          <CardContent className="pt-12 pb-12">
            <div className="text-center space-y-6">
              <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {grade}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{label}</h1>
              <div className="text-5xl md:text-6xl font-bold text-primary">
                {score}/{questions.length}
              </div>
              <p className="text-lg text-foreground/70">
                You answered <span className="font-semibold text-primary">{percentage}%</span> of questions correctly
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-green-500/30 bg-card/50 backdrop-blur-sm hover:border-green-500/60 transition-all">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-green-600">{score}</div>
                <p className="text-foreground/70 text-sm">Correct Answers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-500/30 bg-card/50 backdrop-blur-sm hover:border-red-500/60 transition-all">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-red-600">{questions.length - score - skipped}</div>
                <p className="text-foreground/70 text-sm">Incorrect Answers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/30 bg-card/50 backdrop-blur-sm hover:border-yellow-500/60 transition-all">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-yellow-600">{skipped}</div>
                <p className="text-foreground/70 text-sm">Skipped</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-foreground">Overall Performance</span>
                <span className="text-primary font-bold">{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Review Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Review Your Answers</h2>
          <div className="max-h-96 overflow-y-auto space-y-3">
            {questions.map((question, idx) => {
              const isCorrect = userAnswers[idx] === question.answer_index
              const skippedQuestion = userAnswers[idx] === -1

              return (
                <Card
                  key={idx}
                  className={`border-l-4 transition-all ${
                    skippedQuestion
                      ? "border-l-yellow-500 border-border bg-card/30"
                      : isCorrect
                        ? "border-l-green-500 border-border bg-green-500/5"
                        : "border-l-red-500 border-border bg-red-500/5"
                  }`}
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground/70">Question {idx + 1}</p>
                          <p className="text-foreground font-medium mt-1">{question.question}</p>
                        </div>
                        <div className="text-2xl">{skippedQuestion ? "⊝" : isCorrect ? "✓" : "✗"}</div>
                      </div>
                      {!skippedQuestion && !isCorrect && (
                        <div className="mt-3 space-y-1 text-sm">
                          <p className="text-red-600 dark:text-red-400">
                            Your answer: {question.options[userAnswers[idx]]}
                          </p>
                          <p className="text-green-600 dark:text-green-400">
                            Correct answer: {question.options[question.answer_index]}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onRetry}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg transition-all duration-300"
          >
            Retake Quiz
          </Button>
          <Button onClick={onHome} variant="outline" size="lg">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
