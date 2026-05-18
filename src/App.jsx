import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Work from './pages/Work'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import '../style.css'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Work />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
