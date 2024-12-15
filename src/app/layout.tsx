import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen bg-gray-100">
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}