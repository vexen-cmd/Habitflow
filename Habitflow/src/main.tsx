import { createRoot } from 'react-dom/client'
import './calendar.css'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
// @ts-ignore

createRoot(document.getElementById('root')!).render(
<>
   <BrowserRouter>
    <App />
   </BrowserRouter>
</>

)
