import React, { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(
          "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-normal text-gray-700 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-brand-400 dark:focus:ring-brand-400",
          error && "border-error-500 focus:border-error-500 focus:ring-error-500 dark:border-error-500 dark:focus:border-error-500",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
