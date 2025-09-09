import React, { FC } from "react";
import { cn } from "../../../utils/cn";
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  className?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  hint?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

const Select: FC<SelectProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  options,
  className = "",
  disabled = false,
  error = false,
  success = false,
  hint,
  required = false,
  icon,
}) => {
  const selectId = id || name;

  // Base select classes
  let selectClasses = cn(
    "h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
    "dark:bg-gray-900 dark:text-white/90",
    className
  );

  // Add icon padding
  if (icon) {
    selectClasses = cn(selectClasses, "pl-10");
  }

  // Add styles for different states
  if (disabled) {
    selectClasses = cn(
      selectClasses,
      "text-gray-500 border-gray-300 cursor-not-allowed bg-gray-50",
      "dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
    );
  } else if (error) {
    selectClasses = cn(
      selectClasses,
      "text-error-800 border-error-500 focus:ring-error-500/10 focus:border-error-300",
      "dark:text-error-400 dark:border-error-500"
    );
  } else if (success) {
    selectClasses = cn(
      selectClasses,
      "text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300",
      "dark:text-success-400 dark:border-success-500"
    );
  } else {
    selectClasses = cn(
      selectClasses,
      "bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/10",
      "dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
    );
  }

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={selectId}
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
        
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={selectClasses}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <ChevronDown className="h-4 w-4" />
        </div>
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

export default Select; 