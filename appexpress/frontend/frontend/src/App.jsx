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
  return (
    <>
    <h3>Bienvenido</h3>
     
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Alumno />} />
          <Route path="Alumno" element={<Alumno 
                          titulo="Alumnos"
                          />} />
                          
          <Route path="Profesor" element={
              <Profesor tittle="Profesores"
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