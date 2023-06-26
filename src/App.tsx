import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Achivement } from './Routes/Achivement'
import { Career } from './Routes/Career'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achivement" element={<Achivement />} />
        <Route path="career" element={<Career />} />
      </Routes>
    </div>
  )
}


export default App
