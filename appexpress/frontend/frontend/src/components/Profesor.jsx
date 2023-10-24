
export default function Profesor(propiedades) {
 return ( <>
        <h1>{propiedades.title}</h1>
        {propiedades.children}   
 </>);
}