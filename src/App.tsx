import { BackgroundCanvas, Footer, Hero, Navbar } from './components';
import { ThemeProvider } from './context';

export const App = () => {
  return (
    <ThemeProvider>
      <BackgroundCanvas />
      <Navbar />
      <Hero />
      {/* <Main /> */}
      <Footer />
    </ThemeProvider>
  )
}
