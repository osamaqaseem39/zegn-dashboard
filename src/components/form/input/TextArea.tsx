import React, { FC } from "react";
import { cn } from "../../../utils/cn";

interface TextAreaProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement> | string) => void;
  className?: string;
  rows?: number;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hint?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

const TextArea: FC<TextAreaProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  className = "",
  rows = 4,
  disabled = false,
  success = false,
  error = false,
  hint,
  required = false,
  maxLength,
  minLength,
}) => {
  const textareaId = id || name;

  // Base textarea classes
  let textareaClasses = cn(
    "w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors resize-none",
    "dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30",
    className
  );

  // Add styles for different states
  if (disabled) {
    textareaClasses = cn(
      textareaClasses,
      "text-gray-500 border-gray-300 cursor-not-allowed bg-gray-50",
      "dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
    );
  } else if (error) {
    textareaClasses = cn(
      textareaClasses,
      "text-error-800 border-error-500 focus:ring-error-500/10 focus:border-error-300",
      "dark:text-error-400 dark:border-error-500"
    );
  } else if (success) {
    textareaClasses = cn(
      textareaClasses,
      "text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300",
      "dark:text-success-400 dark:border-success-500"
    );
  } else {
    textareaClasses = cn(
      textareaClasses,
      "bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      // Check if the onChange expects a string directly
      if (onChange.length === 1) {
        onChange(e.target.value);
      } else {
        onChange(e);
      }
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        rows={rows}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        className={textareaClasses}
      />

      {/* Character count and hint */}
      <div className="flex items-center justify-between">
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
        
        {maxLength && (
          <p className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
            {value?.length || 0}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextArea;
