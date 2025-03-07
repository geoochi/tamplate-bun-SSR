import Home from './components/Home'
import About from './components/About'
import { HashRouter, Routes, Route } from 'react-router-dom'
import useTheme from './hooks/useTheme'

const App: React.FC = () => {
  useTheme()
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
