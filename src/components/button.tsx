import { cn } from "@/libs/cn";
import React from "react";

type ButtonVariant = "default" | "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

function Button({
  variant = "default",
  disabled,
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      className={cn(
        "inline-flex items-center px-4 py-2 rounded font-medium transition-colors cursor-pointer",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-100 text-gray-800 hover:bg-gray-200":
            variant === "secondary",
          "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50":
            variant === "default",
          "opacity-60 cursor-not-allowed pointer-events-none": isDisabled,
          relative: loading,
        }
      )}
      disabled={isDisabled}
      {...props}
    >
      {!disabled && loading ? (
        <span
          className={cn("mr-2 h-4 w-4 animate-spin rounded-full border-2", {
            "border-white border-t-transparent": variant === "primary",
            "border-gray-900 border-t-transparent":
              variant === "secondary" || variant === "default",
          })}
        />
      ) : null}
      {children}
    </button>
  );
}

export default Button;
