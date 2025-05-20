export const metadata = {
  title: "Kundenberatung App",
  description: "Interaktive Beratung für Vorsorge und Absicherung"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head />
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}