import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@zendeskgarden/react-theming'
import { CanvasProvider } from './context/CanvasContext.tsx'
import { App } from './App.tsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CanvasProvider>
        <App />
      </CanvasProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
