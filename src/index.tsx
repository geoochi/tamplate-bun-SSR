import { createRoot } from 'react-dom/client'
import App from './App'
import './globals.css'

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  import.meta.hot.data.root ??= createRoot(document.getElementById('root')!).render(<App />)
} else {
  // The hot module reloading API is not available in production.
  createRoot(document.getElementById('root')!).render(<App />)
}
