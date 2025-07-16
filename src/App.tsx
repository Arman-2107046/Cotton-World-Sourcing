import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Business from './pages/Business'
import Sustainability from './pages/Sustainability'


export default function App() {
  return (
  <Router>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/business' element={<Business/>}/>
      <Route path='sustainability' element={<Sustainability/>}/>

      
    </Routes>
  </Router>
  
  )
}