import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EscapeHandler from '../components/EscapeHandler';

export const metadata = {
  title: 'TransCare — Resources & Support for Your Transition',
  description:
    'A comprehensive resource supporting transgender individuals with verified information, provider directories, and guidance for every step of the transition journey.',
  keywords: 'transgender, transition, resources, healthcare, providers, FFS, surgery, support',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <EscapeHandler />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
