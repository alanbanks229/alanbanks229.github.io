import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './ThemeProvider';

const rootNode = document.getElementById('root');
if (rootNode !== null){
  ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  )
}
