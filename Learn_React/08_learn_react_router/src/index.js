import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)