import React from "react"

function Services() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Our Services</h1>
      <p>We provide web development and AI learning resources.</p>
      
      {/* Example image */}
      <img 
        src="https://via.placeholder.com/400x200?text=Web+Development" 
        alt="Web Development Service" 
        style={{ marginTop: "20px", borderRadius: "8px" }}
      />
    </div>
  )
}

export default Services
