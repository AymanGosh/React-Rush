 
import Landing from "./components/Landing";
import HomePage from "./components/HomePage";
import { Routes, Route } from 'react-router-dom'; 

export default function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Landing  />} />
      <Route path="/question1" element={ <HomePage/>} />
    </Routes>
  
 
   
  )
}
