import { Alumno, Profesor, Layout, Login } from "./components";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/auth";

export default function App() {



  return (
    <AuthProvider>
      <Home></Home>
    </AuthProvider>
  )
}

function Home() {
  const { usuario } = useAuth()
  if (usuario) {
    return <Content></Content>
  }

  return <Login></Login>

}

 function Content() {
  const mensaje = "Alumnos están aprendiendo React";
  return (
    <>
    <h1>Hola Mundo</h1>
     
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Alumno />} />
          <Route path="Alumno" element={<Alumno 
                          titulo="Mi Componente Alumno"
                          detalle={mensaje} />} />
                          
          <Route path="Profesor" element={
              <Profesor tittle="Mi Componente Alumno"
                          >
                            <h2>Hola soy un profesor</h2>
                            <h3>Otro hijo </h3>
                           </Profesor>} />
        </Route>

        
      </Routes>
    </BrowserRouter>
    </>
  )
}