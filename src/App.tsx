import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"
import Main from "./pages/Main";

function App() {
  
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-center"
        duration={3000}
        richColors={false} 
        toastOptions={{
          style: {
            fontFamily: "var(--font-sans)",
            borderRadius: "var(--radius)",
          },
          classNames: {
            success: "!bg-primary !text-primary-foreground !border-primary shadow-lg shadow-primary/30",
            error: "!bg-destructive !text-destructive-foreground !border-destructive",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
