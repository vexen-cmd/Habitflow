
import { createRoot } from 'react-dom/client'
import './calendar.css'
import './index.css'
import App from './App.tsx'
// @ts-ignore
import Navbar from "./components/navbar.jsx"

createRoot(document.getElementById('root')!).render(
<>
    <Navbar />
    <App />
</>

)
