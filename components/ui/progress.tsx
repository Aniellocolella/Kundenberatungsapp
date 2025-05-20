interface ProgressProps {
  value: number;
}

export function Progress({ value }: ProgressProps) {
  return (
    <div style={{ width: "100%", backgroundColor: "#eee", borderRadius: 4 }}>
      <div
        style={{
          width: value + "%",
          height: 10,
          backgroundColor: "#0070f3",
          borderRadius: 4
        }}
      />
    </div>
  );
}