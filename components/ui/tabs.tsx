import { useState, ReactNode } from "react";

export function Tabs({ defaultValue, children }: { defaultValue: string; children: ReactNode }) {
  const [value, setValue] = useState(defaultValue);
  const tabs = Array.isArray(children) ? children.filter(child => child.type.name === "TabsTrigger") : [];
  const contents = Array.isArray(children) ? children.filter(child => child.type.name === "TabsContent") : [];

  return (
    <div className="space-y-2">
      <div className="flex gap-2">{tabs.map(tab => 
        tab.props.value === value 
          ? { ...tab, props: { ...tab.props, active: true, onClick: () => setValue(tab.props.value) } }
          : { ...tab, props: { ...tab.props, active: false, onClick: () => setValue(tab.props.value) } }
      )}</div>
      {contents.map(content => content.props.value === value && content)}
    </div>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex gap-2">{children}</div>;
}

export function TabsTrigger({ value, children, active = false, onClick = () => {} }: any) {
  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded-full \${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}\`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
  return <div>{children}</div>;
}