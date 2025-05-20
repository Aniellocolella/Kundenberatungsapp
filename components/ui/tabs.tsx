import { ReactNode, useState } from "react";

export function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [active, setActive] = useState(defaultValue);
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div>
      {childrenArray.map((child: any) =>
        child.type.name === "TabsList"
          ? { ...child, props: { ...child.props, active, setActive } }
          : null
      )}
      {childrenArray.map((child: any) =>
        child.type.name === "TabsContent" && child.props.value === active ? child : null
      )}
    </div>
  );
}

export function TabsList({ children, active, setActive }: any) {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {children.map((child: any) =>
        child.type.name === "TabsTrigger"
          ? {
              ...child,
              props: {
                ...child.props,
                active: child.props.value === active,
                onClick: () => setActive(child.props.value),
              }
            }
          : null
      )}
    </div>
  );
}

export function TabsTrigger({ value, children, onClick, active }: any) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: active ? "#0070f3" : "#ddd",
        color: active ? "white" : "black",
        borderRadius: 4,
      }}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
  return <div style={{ marginTop: 16 }}>{children}</div>;
}