import React, { InputHTMLAttributes, forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../../utils/cn";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  onChange?: (value: boolean | React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  hint?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, checked, onChange, label, hint, id, ...props }, ref) => {
    const checkboxId = id || useId();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    const checkboxElement = (
      <input
        ref={ref}
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={twMerge(
          "h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-2 focus:ring-brand-500 dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-brand-400",
          className
        )}
        {...props}
      />
    );

    if (label || hint) {
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {checkboxElement}
            {label && (
              <label 
                htmlFor={checkboxId}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
              >
                {label}
              </label>
            )}
          </div>
          {hint && (
            <p className="text-xs text-gray-500 dark:text-gray-400 ml-6">
              {hint}
            </p>
          )}
        </div>
      );
    }

    return checkboxElement;
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
