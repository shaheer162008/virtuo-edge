import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-primary to-cyan-bright text-dark hover:opacity-90 shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:shadow-xl",
                destructive:
                    "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/40 hover:shadow-red-500/60",
                outline:
                    "border-2 border-primary/50 bg-transparent hover:bg-primary/10 text-primary hover:border-primary shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30",
                secondary:
                    "bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/20 backdrop-blur-sm shadow-lg shadow-white/10",
                ghost: "hover:bg-white/10 text-white/80 hover:text-white shadow-none hover:shadow-md",
                link: "text-primary underline-offset-4 hover:underline shadow-none",
            },
            size: {
                default: "h-12 px-8 py-3",
                sm: "h-10 rounded-lg px-5 text-sm",
                lg: "h-14 rounded-xl px-10 text-lg",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
