import { ReactNode } from "react";

export function Button({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px", backgroundColor: "#0070f3", color: "white", borderRadius: 4 }}>
      {children}
    </button>
  );
}