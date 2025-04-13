import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Fresque from './pages/Fresque'
import BrowserSizedContainer from './components/containers/BrowserSizedContainer'
import Activities from './pages/Activities'
import Context from './pages/Context'
import Thanks from './pages/Thanks'

function App () {
  return (
    <BrowserRouter>
      <Navbar/>
      <BrowserSizedContainer>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/context" element={<Context /> } />
          <Route path="/activities" element={<Activities/> } />
          <Route path="/fresque" element={<Fresque/> } />
          <Route path="/thanks" element={ <Thanks/> } />
        </Routes>
      </BrowserSizedContainer>
    </BrowserRouter>
  )
}

export default App