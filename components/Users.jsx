'use client'
import { useRouter } from "next/navigation";

// next/navigation pronto será eliminado en versiones futuras de Next.js. 
// Por lo tanto, para asegurarte de que tu código funcionará en futuras versiones 
// de Next, deberías actualizar a usar next/router en su lugar.

// El código funciona con import { useRouter } from 'next/navigation' y no funciona 
// con import { useRouter } from 'next/router' debido a cuándo se importa el hook 
// se obtiene el error: NextRouter was not mounted.

// Esto significa que estás tratando de usar useRouter() antes de que Next haya 
// montado el enrutador. Al importarlo de next/navigation, se importa sincrónicamente, 
// por lo que funciona en tu código. Pero al importarlo de next/router, se importa de 
// forma asíncrona, por lo que no está disponible aún cuando tratas de usarlo.

// Sin embargo, importar de next/router es la opción recomendada, por lo que para 
// solucionarlo solo necesitas asegurarte de usar useRouter() después de que Next 
// haya montado el enrutador

export function Users({users}) {

  const router = useRouter()

  const ruta = (id)=>{
    router.push(`/users/${id}`)
  }

  return (
    <ul className=" flex flex-col min-w-[80%] ">
       {
         users.map(user => (
          <li key={user.id} onClick={()=> ruta(user.id)} className=" flex flex-row-reverse justify-between mb-5 p-4 min-w-full border-[1px] border-gray-light border-opacity-20 hover:bg-gray hover:bg-opacity-70 cursor-pointer">
            <div className="text-gray-light flex flex-col justify-center">
              <h2>{`${user.id}-${user.first_name} ${user.last_name}`}</h2>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} alt={`avatar-${user.id}`} className=" rounded-full"/>
          </li>
         ))   
       }
    </ul>
  )
}