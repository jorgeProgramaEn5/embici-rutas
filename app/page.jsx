import {Users} from '@/components/Users';

async function fetchUsers(){
  const res = await fetch('https://reqres.in/api/users?page=1');
  const data = res.json();
  return data;
}

export default async function IndexPage() {
  const data = await fetchUsers();
  const user = data.data;
  return (
    <div className=' flex justify-center bg-gray-dark pt-[20px]'>
      <Users users={user}/>
    </div>
  )
}
