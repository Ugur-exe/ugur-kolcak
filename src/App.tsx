
import { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './components/Navbar'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import Personnel from './pages/Personnel'
function App() {

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Personnel />
      <CaseStudies />

      <Contact />
      
    </div>
  )
}

export default App
