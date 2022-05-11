import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({ type = 'button', children, ...props }: ButtonProps) {
  return (
    <button type={type} {...props}>{children}</button>
  );
}
