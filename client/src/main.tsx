import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n";
import { Provider}  from "react-redux"
import { reduxStore } from "./Redux/ReduxStore.ts";

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <Provider store={  reduxStore }>
    <App />
    </Provider>
  </StrictMode>,
)
