"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface QuizHomeProps {
  onStart: () => void
}

export default function QuizHome({ onStart }: QuizHomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="animate-slide-in">
          <div className="text-center mb-8 space-y-4">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Knowledge Assessment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6">
             Generic Elective Quiz            </h1>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">
              Test your knowledge across multiple topics with our comprehensive quiz. 200 carefully crafted questions to
              challenge and improve your expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold text-primary">200</div>
                  <p className="text-foreground/70">Questions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold text-secondary">UNIT 4 & 5</div>
                  <p className="text-foreground/70">Diverse Topics</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Button
              onClick={onStart}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 h-14 text-lg font-semibold animate-pulse-glow"
            >
              Start Quiz Now
            </Button>
            <p className="text-center text-sm text-foreground/50">Get instant feedback and track your progress</p>
          </div>
        </div>
      </div>
    </div>
  )
}
