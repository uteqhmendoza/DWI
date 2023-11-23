import { useState,useEffect } from "react"

export default function Alumno({children, titulo, detalle = "cargando Alumnos"}) {
    const [text, setText] = useState("");
    const [alumnos, setAlumnos] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:3000/api/alumno",{credentials: "include"})
        .then((res)=> res.json())
        .then((json)=> {
            setAlumnos(json.map(c=>c))
         }
        )   
        
    },[])

    return (
        <>
        <h1>{titulo}</h1>
        <h2>{detalle}</h2>
        <input type="text" onChange={(v) => setText(v.target.value)} ></input>
         
        <h1>{text}</h1>
        <ul>
         {alumnos.map(alumno => (<li>{alumno.nombre + " " +alumno.email}</li>))}
        </ul>
        </>
    )
}