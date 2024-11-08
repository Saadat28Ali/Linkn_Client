import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Component imports ----------------------------
import App from './App.tsx'

// Other imports --------------------------------
import { ThemesEnum } from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App theme={ThemesEnum.lightTheme}/>
  </StrictMode>,
)
