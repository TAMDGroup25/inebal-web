import React, { useEffect, useState } from "react";
import clsx from "clsx";
import type { CustomInputProps } from '../../lib/types'

const sizeClasses: Record<string, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  type = "text",
  name,
  placeholder,
  value = "",
  onChange,
  size = "md",
  error,
  leftIcon,
  rightIcon,
  className = "",
  rows = 3,
}) => {
  const [localError, setLocalError] = useState<string | null>(null);
  const [localValue, setLocalValue] = useState(value);

  const inputType = type === "name" ? "text" : type;

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const validate = (val: string) => {
    if (type === "name") {
      if (!val.trim()) return "Este campo es obligatorio.";
      const capitalized = val.trim()[0] === val.trim()[0]?.toUpperCase();
      if (!capitalized) return "La primera letra debe estar en mayúscula.";
    }
    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) return "Introduce un correo electrónico válido.";
    }
    return null;
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  let newValue = e.target.value;

  // Capitalizar si es name
  if (type === "name" && newValue.length > 0) {
    newValue = newValue[0].toUpperCase() + newValue.slice(1);
  }

  setLocalValue(newValue);

  const validationError = validate(newValue);
  setLocalError(validationError || null);

  const modifiedEvent = {
    ...e,
    target: {
      ...e.target,
      value: newValue,
    },
  };

  onChange?.(modifiedEvent as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
};


  const inputClasses = clsx(
    "w-full border rounded-lg focus:outline-none text-black focus:ring-1 focus:ring-[#84A68E] resize-none",
    sizeClasses[size],
    leftIcon && "pl-10",
    rightIcon && "pr-10",
    error || localError
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-[#84A68E]",
    className
  );

  return (
    <div className={clsx("flex flex-col w-full", (error || localError) && "mb-1")}>
      {label && (
        <label htmlFor={id} className="mb-1 text-[#84A68E] font-bold">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {leftIcon}
          </div>
        )}
        {type === "textarea" ? (
          <textarea
            id={id}
            name={name || id}
            placeholder={placeholder}
            value={localValue}
            onChange={handleChange}
            rows={rows}
            className={inputClasses}
          />
        ) : (
          <input
            id={id}
            name={name || id}
            type={inputType}
            placeholder={placeholder}
            value={localValue}
            onChange={handleChange}
            className={inputClasses}
          />
        )}
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
      {(error || localError) && (
        <p className="mt-1 text-sm text-red-500">{error || localError}</p>
      )}
    </div>
  );
};

export default CustomInput;
