import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import Main from "./pages/Main";

function App() {
  
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
