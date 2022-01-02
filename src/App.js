import './css/style.css'
import Header from './pages/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import OurWorks from './pages/OurWorks'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Services />
      <OurWorks />
      <Clients />
      <Contact />
    </div>
  )
}

export default App
