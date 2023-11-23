import { useState,useEffect } from "react"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Alumno({children, titulo, detalle = "cargando Alumnos"}) {
    
    const [data, setAlumnos] = useState([]);
    const columns = [
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'nombre', headerName: 'Nombre', width: 230 }
    ]

    useEffect(()=> {
        fetch("http://localhost:3000/api/alumno",{credentials: "include"})
        .then((res)=> res.json())
        .then((json)=> {
            setAlumnos(json.map(c=>c))
         }
        )   
        
    },[])

    return (
      
        <Box sx={{ height: 520, width: '100%' }}>
          <h1>{titulo}</h1>
        <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </Box>
    )
}