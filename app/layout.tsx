import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; //引入fonts.ts
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 使用inter這種字體 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
