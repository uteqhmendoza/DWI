import { Alumno, Profesor, Layout } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profesor from "./components/Profesor";


export default function App() {
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