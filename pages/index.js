import React from "react"
import Link from "next/link"
function App() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-brand">Cloudinary Demo</div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/dashboard">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link href="/upload">Upload</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
