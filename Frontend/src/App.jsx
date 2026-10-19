import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Placeholder from './Pages/Placeholder'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Placeholder title="Login" />} />
          <Route path="/register" element={<Placeholder title="Register" />} />
          <Route path="/vendors" element={<Placeholder title="Find Vendors" />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}