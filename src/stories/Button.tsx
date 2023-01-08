import React from 'react';
import './button.css';
import { Hover } from './Button.stories';
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "xs" | "sm" | "base" | "md" | "lg";
  label: string;
  onClick?: () => void;
  
}

export const Button = ({
  primary = false,
  size = 'base',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <>
      <button
        type="button"
        className={["storybook-button", `storybook-button--${size}`, mode].join(
          " "
        )}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    </>
  );
};
