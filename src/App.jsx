import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Overlay from './components/overlay/Overlay'
import Fresque from './pages/Fresque'
import BrowserSizedContainer from './components/containers/BrowserSizedContainer'
import Activities from './pages/Activities'

function App () {
  return (
    <BrowserRouter>
      <Overlay/>
      <BrowserSizedContainer>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/activities" element={<Activities/> } />
          <Route path="/fresque" element={<Fresque/> } />
        </Routes>
      </BrowserSizedContainer>
    </BrowserRouter>
  )
}

export default App