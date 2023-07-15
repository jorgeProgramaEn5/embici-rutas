'use client'
import axios from 'axios';

const fetchData = ()=> {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
      .then(res => res.json())
      .catch(console.log("upss fetching error"))
}

// const fetchData = ()=> {
//     return fetch('http://localhost:1337/api/banners?populate=*', {
//         next: {
//             revalidate: 60
//         }
//     })
//       .then(res => res.json())
//       .catch(console.log("upss fetching error"))
// }




const Header2 = async () => {
    const data = await fetchData();
    console.log(data);
    
    return (
      <div className='header'>
          <div className='overflow-hidden max-h-[575px] container mx-auto max-w-7xl text-gray-light'>
                  {/* <h1>{data[0].title}</h1> */}
          </div>
        </div>
    )
}

  
export default Header2;