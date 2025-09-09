import React, { FC } from "react";
import { cn } from "../../../utils/cn";

interface InputProps {
  type?: "text" | "number" | "email" | "password" | "date" | "time" | string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string;
  max?: string;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
  required?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input: FC<InputProps> = ({
  type = "text",
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  className = "",
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint,
  required = false,
  icon,
  iconPosition = 'left',
}) => {
  const inputId = id || name;

  // Base input classes
  let inputClasses = cn(
    "h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
    "dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30",
    className
  );

  // Add icon padding
  if (icon) {
    if (iconPosition === 'left') {
      inputClasses = cn(inputClasses, "pl-10");
    } else {
      inputClasses = cn(inputClasses, "pr-10");
    }
  }

  // Add styles for different states
  if (disabled) {
    inputClasses = cn(
      inputClasses,
      "text-gray-500 border-gray-300 cursor-not-allowed bg-gray-50",
      "dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
    );
  } else if (error) {
    inputClasses = cn(
      inputClasses,
      "text-error-800 border-error-500 focus:ring-error-500/10 focus:border-error-300",
      "dark:text-error-400 dark:border-error-500"
    );
  } else if (success) {
    inputClasses = cn(
      inputClasses,
      "text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300",
      "dark:text-success-400 dark:border-success-500"
    );
  } else {
    inputClasses = cn(
      inputClasses,
      "bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
    );
  }

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
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          required={required}
          className={inputClasses}
        />

        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>

      {/* Hint Text */}
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
};

export default Input;
