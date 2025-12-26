import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductGallery from './pages/ProductGallery'
import Solutions from './pages/Solutions'
import About from './pages/About'
import News from './pages/News'
import Support from './pages/Support'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main style={{ paddingTop: '80px', minHeight: '80vh' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductGallery />} />
                        <Route path="/products/:categoryId" element={<ProductGallery />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/solutions/:solutionId" element={<Solutions />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/support/:type?" element={<Support />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
