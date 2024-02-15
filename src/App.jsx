import './App.css'
import { DatingRequestCard } from '../src/components/Card/card'
import { ThemeProvider } from './contexts/theme-context'
import { ThemeTogglerButton } from './components/Theme-Toggler-Button/theme-toggler-button'

function App() {

  return (
    <div>
      <ThemeProvider>
        <ThemeTogglerButton />
        <DatingRequestCard />
      </ThemeProvider>
    </div>
  )
}

export default App