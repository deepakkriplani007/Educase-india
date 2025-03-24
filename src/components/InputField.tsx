import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  error,
  required = false,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
          {required && <span className="text-purple">*</span>}
        </label>
      )}
      <input
        id={id}
        className={`
          input-field
          ${error ? "border-red-500 focus:ring-red-500" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
