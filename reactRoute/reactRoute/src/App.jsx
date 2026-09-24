import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Services from "./component/Services"
import Contact from "./component/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
        
        {/* Navbar */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>HOME</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>ABOUT US</Link>
          <Link to="/services" style={{ margin: "0 10px" }}>SERVICES</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>CONTACT</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App