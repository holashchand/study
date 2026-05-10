import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'prismjs/themes/prism-tomorrow.css'
import AppRouter from './router/AppRouter'
import { ThemeProvider } from './context/ThemeContext'
import { ErrorBoundary } from './components/ErrorBoundary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
)
