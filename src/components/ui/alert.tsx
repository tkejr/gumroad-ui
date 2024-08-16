import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Icon from "@/components/ui/icon";

const alertVariants = cva(
  "relative w-full rounded-md border p-3 flex items-center justify-between",
  {
    variants: {
      variant: {
        info: "bg-secondary-purple-light border-secondary-purple-dark",
        destructive: "bg-primary-red-light  border-primary-red-dark",
        success: "bg-primary-green-light border-primary-green-dark ",
        warning: "bg-primary-gold-light  border-primary-gold-dark",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
    <div className="flex items-center space-x-2">
      {variant === "success" && (
        <Icon 
          name="check-circle-fill" 
          size={18} 
          className="bg-primary-green-dark" 
        />
      )}
      {variant === "destructive" && (
        <Icon 
          name="x-circle-fill" 
          size={18} 
          className="bg-primary-red-dark" 
        />
      )}
      {variant === "warning" && (
        <Icon 
          name="shield-exclamation-fill" 
          size={18} 
          className="bg-primary-gold-dark" 
        />
      )}
      {variant === "info" && (
        <Icon 
          name="info-circle-fill" 
          size={18} 
          className="bg-secondary-purple-dark" 
        />
      )}
      <span className="leading-tight">{children}</span>
    </div>
    <button className="text-current hover:text-opacity-80">
      <X size={18} />
    </button>
  </div>
));

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-medium leading-none", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
