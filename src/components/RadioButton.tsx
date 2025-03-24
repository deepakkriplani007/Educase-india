import React from "react";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="radio-button">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-input"
      />
      <label htmlFor={id} className="radio-label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
