import { BackgroundCanvas, Footer, Hero, Main, Navbar, WhatsAppButton } from '@components';
import { ThemeProvider } from '@context';

export const App = () => {
  return (
    <ThemeProvider>
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      <Main />
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
