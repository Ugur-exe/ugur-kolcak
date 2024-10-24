
import './App.css'
import Personnel from './pages/Personnel'
import CaseStudies from './pages/CaseStudies'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { Toaster } from 'react-hot-toast'
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
      <Footer />
    </div>
  )
}

export default App
