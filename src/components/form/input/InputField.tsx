import React, { InputHTMLAttributes, forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
  label?: string;
  hint?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, label, hint, icon, id, required, ...props }, ref) => {
    const inputId = id || useId();
    
    const inputClasses = twMerge(
      "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-normal text-gray-700 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-brand-400 dark:focus:ring-brand-400",
      error && "border-error-500 focus:border-error-500 focus:ring-error-500 dark:border-error-500 dark:focus:border-error-500",
      success && "border-success-500 focus:border-success-500 focus:ring-success-500 dark:border-success-500 dark:focus:border-success-500",
      icon && "pl-10",
      className
    );

    if (label || hint || icon) {
      return (
        <div className="space-y-2">
          {label && (
            <label 
              htmlFor={inputId}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {label}
              {required && <span className="text-error-500 ml-1">*</span>}
            </label>
          )}
          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {icon}
              </div>
            )}
            <input
              ref={ref}
              id={inputId}
              className={inputClasses}
              required={required}
              {...props}
            />
          </div>
          {hint && (
            <p
              className={cn(
                "text-xs",
                error
                  ? "text-error-500"
                  : success
                  ? "text-success-500"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              {hint}
            </p>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        id={inputId}
        className={inputClasses}
        required={required}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
