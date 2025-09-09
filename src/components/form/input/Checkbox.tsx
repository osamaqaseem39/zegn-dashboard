import React, { FC } from "react";
import { cn } from "../../../utils/cn";
import { Check } from "lucide-react";

interface CheckboxProps {
  id?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | boolean) => void;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  hint?: string;
  required?: boolean;
  indeterminate?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked = false,
  onChange,
  className = "",
  disabled = false,
  error = false,
  success = false,
  hint,
  required = false,
  indeterminate = false,
}) => {
  const checkboxId = id || name;

  // Base checkbox classes
  let checkboxClasses = cn(
    "h-4 w-4 rounded border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    "dark:bg-gray-900 dark:border-gray-700",
    className
  );

  // Add styles for different states
  if (disabled) {
    checkboxClasses = cn(
      checkboxClasses,
      "border-gray-300 bg-gray-100 cursor-not-allowed",
      "dark:border-gray-600 dark:bg-gray-800"
    );
  } else if (error) {
    checkboxClasses = cn(
      checkboxClasses,
      "border-error-500 focus:ring-error-500/10",
      "dark:border-error-500"
    );
  } else if (success) {
    checkboxClasses = cn(
      checkboxClasses,
      "border-success-500 focus:ring-success-500/10",
      "dark:border-success-500"
    );
  } else {
    checkboxClasses = cn(
      checkboxClasses,
      "border-gray-300 focus:border-brand-300 focus:ring-brand-500/10",
      "dark:border-gray-700 dark:focus:border-brand-800"
    );
  }

  // Add checked state
  if (checked && !disabled) {
    checkboxClasses = cn(
      checkboxClasses,
      "bg-brand-500 border-brand-500",
      "dark:bg-brand-500 dark:border-brand-500"
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      // Check if the onChange expects a boolean directly
      if (onChange.length === 1) {
        onChange(e.target.checked);
      } else {
        onChange(e);
      }
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-start space-x-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id={checkboxId}
            name={name}
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            required={required}
            ref={(el) => {
              if (el) {
                el.indeterminate = indeterminate;
              }
            }}
            className="sr-only"
          />
          <label
            htmlFor={checkboxId}
            className={cn(
              "flex items-center justify-center cursor-pointer",
              disabled && "cursor-not-allowed"
            )}
          >
            <div className={checkboxClasses}>
              {checked && (
                <Check className="h-3 w-3 text-white" />
              )}
            </div>
          </label>
        </div>
        
        {label && (
          <div className="flex-1">
            <label
              htmlFor={checkboxId}
              className={cn(
                "text-sm font-medium cursor-pointer",
                disabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              {label}
              {required && <span className="text-error-500 ml-1">*</span>}
            </label>
          </div>
        )}
      </div>

      {/* Hint Text */}
      {hint && (
        <p
          className={cn(
            "text-xs ml-7",
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

export default Checkbox;
