import Index from "./pages"
import Navbar from "./components/navbar.tsx"
import { Routes, Route } from "react-router-dom"
import Goals from "./pages/goals.tsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/goals" element={<Goals />} />

        <Route path="/calendar" element={<h1>Calendar</h1>} />
        <Route path="/analytics" element={<h1>Analytics</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Routes>
    </>
  )
}

export default App
