export const metadata = {
  title: "Kundenberatung",
  description: "Beratung zu Vorsorge und Absicherung"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}