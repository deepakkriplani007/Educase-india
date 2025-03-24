import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={`
        px-4 py-3 rounded-md font-medium transition-all duration-200 text-center
        ${
          variant === "primary"
            ? "bg-purple text-white hover:bg-purple-dark"
            : ""
        }
        ${
          variant === "secondary"
            ? "bg-purple-light text-gray-700 hover:bg-opacity-90"
            : ""
        }
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
