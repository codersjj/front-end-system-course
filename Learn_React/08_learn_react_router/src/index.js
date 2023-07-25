import { Suspense } from 'react'
// import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(
  // <StrictMode>
    <HashRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
        <App />
      </Suspense>
    </HashRouter>
  // </StrictMode>
)