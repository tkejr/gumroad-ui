"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faGoogle, 
  faAndroid, 
  faApple, 
  faDiscord, 
  faPaypal, 
  faStripe, 
  faTwitter, 
  faAmazon 
} from "@fortawesome/free-brands-svg-icons";

// Map variants to FontAwesome icons
const variantIcons = {
  facebook: faFacebook,
  google: faGoogle,
  android: faAndroid,
  apple: faApple,
  discord: faDiscord,
  paypal: faPaypal,
  stripe: faStripe,
  twitter: faTwitter,
  amazon: faAmazon,  // Using faAmazon for Kindle
};

// Define button variants including brand-specific styles
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        facebook: "bg-facebook text-white border-[1px] border-primary rounded-md hover:bg-facebook hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        google: "bg-google text-white border-[1px] border-primary rounded-md hover:bg-google hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        android: "bg-android text-white border-[1px] border-primary rounded-md hover:bg-android hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        apple: "bg-apple text-white border-[1px] border-primary rounded-md hover:bg-apple hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        discord: "bg-discord text-white border-[1px] border-primary rounded-md hover:bg-discord hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        paypal: "bg-paypal text-white border-[1px] border-primary rounded-md hover:bg-paypal hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        stripe: "bg-stripe text-white border-[1px] border-primary rounded-md hover:bg-stripe hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        twitter: "bg-twitter text-white border-[1px] border-primary rounded-md hover:bg-twitter hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
        amazon: "bg-amazon text-white border-[1px] border-primary rounded-md hover:bg-amazon hover:shadow-[3px_3px_0_0_#000] hover:border-primary",
      },
      size: {
        regular: "h-12 px-4 py-2", // 48px height
        small: "h-7 px-3 rounded-md", // 30px height
      },
    },
    defaultVariants: {
      variant: "google",
      size: "regular",
    },
  }
);


// Define button props
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Branded Button Component
const BrandedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const icon = variant ? variantIcons[variant] : null;

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
        {props.children}
      </Comp>
    );
  }
);

BrandedButton.displayName = "BrandedButton";

export { BrandedButton, buttonVariants };

