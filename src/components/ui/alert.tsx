import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

const alertVariants = cva(
  "relative w-full rounded-md border p-3 flex items-start justify-between",
  {
    variants: {
      variant: {
        info: "bg-secondary-purple-light border-secondary-purple-dark",
        destructive: "bg-primary-red-light border-primary-red-dark",
        success: "bg-primary-green-light border-primary-green-dark",
        warning: "bg-primary-gold-light border-primary-gold-dark",
        default: "bg-white border-black", // Default variant
      },
    },
    defaultVariants: {
      variant: "default", // Set the default variant to 'default'
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  onClose?: () => void;
  iconName?: string; // Optional iconName prop
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", children, onClose, iconName, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      <div className="flex items-start space-x-2">
        {variant !== "default" && variant === "success" && (
          <Icon
            name="check-circle-fill"
            size={18}
            className="bg-primary-green-dark flex-shrink-0 mt-0.5"
          />
        )}
        {variant !== "default" && variant === "destructive" && (
          <Icon
            name="x-circle-fill"
            size={18}
            className="bg-primary-red-dark flex-shrink-0 mt-0.5"
          />
        )}
        {variant !== "default" && variant === "warning" && (
          <Icon
            name="shield-exclamation-fill"
            size={18}
            className="bg-primary-gold-dark flex-shrink-0 mt-0.5"
          />
        )}
        {variant !== "default" && variant === "info" && (
          <Icon
            name="info-circle-fill"
            size={18}
            className="bg-secondary-purple-dark flex-shrink-0 mt-0.5"
          />
        )}
        {variant === "default" && iconName && (
          <Icon
            name={iconName}
            size={18}
            className="flex-shrink-0 mt-0.5 bg-black"
          />
        )}
        <span className="leading-tight">{children}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-current hover:text-opacity-80 underline"
        >
          close
        </button>
      )}
    </div>
  )
);

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
