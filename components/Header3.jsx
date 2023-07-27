import axios from 'axios';


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
   
export default async function Header3() {
  const data = await getData()
  
  return (
      <div className='header'>
          <div className='overflow-hidden max-h-[575px] container mx-auto max-w-7xl text-gray-light p-4'>
                  <h1>{data[0].title}</h1>
                  <h1>{data[0].title}</h1>
          </div>
        </div>
    )
}

// Esta variante es como se recomienda en la documentacion, de como hacer un feching de datos en nextjs. Solo que
// cuando hacia la peticion en el servidor. Solo que cuando lo utilizo para pedir datos a strapi desede el 
// loclahost:1773, si lo hago del lado del servidor, no se piden y si lo hago del lado del cliente next se vuelve loco 
// y empieza a mandar miles de solicitudes