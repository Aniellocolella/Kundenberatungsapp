import { ReactNode } from "react";

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  variant?: "default" | "outline";
  disabled?: boolean;
}

export function Button({ onClick, children, variant = "default", disabled = false }: ButtonProps) {
  const base = "px-4 py-2 rounded-xl font-semibold transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100"
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`\${base} \${variants[variant]} \${disabled ? 'opacity-50 cursor-not-allowed' : ''}\`}
    >
      {children}
    </button>
  );
}