import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homePage/homePage.jsx'
import AboutPage from './pages/aboutPage/aboutPage.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
    </>
  )
}

export default App
