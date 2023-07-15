import axios from 'axios';


async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }


//   async function getData() {
//     const res = await axios.get('http://localhost:1337/api/banners')
//     if (!res.ok) {
//       throw new Error('Failed to fetch data')
//     }
//     return res.data
//   }
   
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