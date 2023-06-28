async function getUsers(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({params}) {

  const user = await getUsers(params.id)

  return (
    <div className=" w-full min-h-screen bg-gray-dark flex flex-col justify-start pt-7 items-center">
      <div className="bg-blue w-[70%] flex flex-col justify-center items-center rounded-xl">
        <h1 className=" p-4">User Details</h1>
        <div className="flex flex-col justify-center items-center text-center">
          <img src={user.avatar} alt={`avatar-${user.id}`} className="rounded-3xl"/>
          <div className=" p-4">
              <h2>{`${user.first_name} ${user.last_name}`}</h2>
              <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
