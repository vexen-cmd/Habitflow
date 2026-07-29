import Index from "./pages"
import Navbar from "./components/navbar.tsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <div >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/goals" element={<h1>Goals</h1>} />
          <Route path="/calendar" element={<h1>Calendar</h1>} />
          <Route path="/analytics" element={<h1>Analytics</h1>} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
