import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './common/Navbar'
import Main from './views/Main'
import About from './views/About'
import Feature from './views/Features'
import Prices from './views/Pricing'
import Testimonials from './views/Testimonials'
import Trust from './views/Trusted'

function App() {
  return (
   <div>
    <Navbar />
    <Routes>
       <Route path='/' element={<Main />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/features' element={<Feature />}/>
       <Route path='/price' element={<Prices />}/>   
       <Route path='/testimonial' element={<Testimonials/>}/>
       <Route path='/trusted' element={<Trust />}/>
    </Routes>

   </div>
  )
}
export default App
