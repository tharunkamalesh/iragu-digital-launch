import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-[0_0_30px_hsl(30_50%_45%/0.4)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-[hsl(30,50%,45%)] to-[hsl(35,60%,55%)] text-white shadow-lg hover:shadow-[0_0_30px_hsl(30_50%_45%/0.4)] hover:scale-[1.02]",
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BA5C] shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]",
        "orange-cta": "bg-[#F59E0B] text-white hover:bg-[#D97706] shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]",
        "green-accent": "bg-[#22C55E] text-white hover:bg-[#16A34A] shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
        pill: "rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground",
        "pill-active": "rounded-full bg-primary text-primary-foreground",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
