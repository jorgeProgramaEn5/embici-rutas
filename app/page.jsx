// import {Header} from '@/components/Header';
import Header2 from '@/components/Header2';

// async function fetchUsers(){
//   const res = await fetch('https://reqres.in/api/users?page=1');
//   const data = res.json();
//   return data;
// }

export default async function IndexPage() {
  // const data = await fetchUsers();
  // const user = data.data;
  return (
    <div className=''>
      {/* <Header/> */}
      <Header2/>
    </div>
  )
}
