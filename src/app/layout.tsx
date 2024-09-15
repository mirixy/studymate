// src/app/layout.tsx
import '../styles/globals.css'; // Import global styles
import Sidebar from '../components/Sidebar'; // Import Sidebar

export const metadata = {
  title: 'StudyMate',
  description: 'Your study management dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <Sidebar /> {/* Render Sidebar */}
          <main style={{ flex: 1, padding: '0px' }}>
            {children} {/* Render main content (pages) */}
          </main>
        </div>
      </body>
    </html>
  );
}