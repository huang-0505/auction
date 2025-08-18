"use client"

import { useMode } from "@/contexts/mode-context"
import { Button } from "@/components/ui/button"
import { Gavel, Scale } from "lucide-react"

export function ModeToggle() {
  const { mode, setMode } = useMode()

  return (
    <div className="flex items-center bg-card border rounded-lg p-1">
      <Button
        variant={mode === "auction" ? "default" : "ghost"}
        size="sm"
        onClick={() => setMode("auction")}
        className="flex items-center gap-2 text-xs"
      >
        <Gavel className="h-3 w-3" />
        拍卖行
      </Button>
      <Button
        variant={mode === "law" ? "default" : "ghost"}
        size="sm"
        onClick={() => setMode("law")}
        className="flex items-center gap-2 text-xs"
      >
        <Scale className="h-3 w-3" />
        律师事务所
      </Button>
    </div>
  )
}
