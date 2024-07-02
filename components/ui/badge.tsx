import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border mx-1 px-2.5 py-0.5 text-sm text-secondary-foreground font-game transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        normal:
          "border bg-[#A0A29F] hover:bg-[#A0A29F]/80",
        bug:
          "border bg-[#92BC2C] hover:bg-[#92BC2C]/80",
        dark:
          "border bg-[#595761] hover:bg-[#595761]/80",
        dragon:
          "border bg-[#0C69C8] hover:bg-[#0C69C8]/80",
        electric:
          "border bg-[#F2D94E] hover:bg-[#F2D94E]/80",
        fire:
          "border bg-[#FBA54C] hover:bg-[#FBA54C]/80",
        fairy:
          "border bg-[#EE90E6] hover:bg-[#EE90E6]/80",
        fighting:
          "border bg-[#D3425F] hover:bg-[#D3425F]/80",
        flying:
          "border bg-[#A1BBEC] hover:bg-[#A1BBEC]/80",
        ghost:
          "border bg-[#5F6DBC] hover:bg-[#5F6DBC]/80",
        grass:
          "border bg-[#5FBD58] hover:bg-[#5FBD58]/80",
        ground:
          "border bg-[#DA7C4D] hover:bg-[#DA7C4D]/80",
        ice:
          "border bg-[#75D0C1] hover:bg-[#75D0C1]/80",
        poison:
          "border bg-[#B763CF] hover:bg-[#B763CF]/80",
        psychic:
          "border bg-[#FA8581] hover:bg-[#FA8581]/80",
        rock:
          "border bg-[#C9BB8A] hover:bg-[#C9BB8A]/80",
        steel:
          "border bg-[#5695A3] hover:bg-[#5695A3]/80",
        water:
          "border bg-[#539DDF] hover:bg-[#539DDF]/80",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
