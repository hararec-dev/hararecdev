import { ThemeProvider } from '@/common/context/ThemeContext'; // Adjusted path
import { BackgroundCanvas } from '@/common/components/BackgroundCanvas'; // Adjusted path
import { Footer } from '@/common/components/Footer'; // Adjusted path, assuming Footer is common now
import { Hero } from '@/common/components/Hero'; // Adjusted path, assuming Hero is common now
import { Main } from '@/common/components/Main'; // Adjusted path, assuming Main is common now
import { Navbar } from '@/common/components/Navbar'; // Adjusted path, assuming Navbar is common now
import { WhatsAppButton } from '@/common/components/WhatsAppButton'; // Adjusted path

// It's likely many of these components, or this page itself, will need "use client"
// For now, let's assume ThemeProvider, Navbar, Hero, Main (if it has client logic), Footer (if ContactForm is client), WhatsAppButton are client components.
// BackgroundCanvas might also be a client component if it uses browser APIs for animation.

export default function HomePage() {
  return (
    <ThemeProvider>
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <Main />
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
}
