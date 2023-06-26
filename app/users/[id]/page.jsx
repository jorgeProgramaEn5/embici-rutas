async function getUsers(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({params}) {

  const user = await getUsers(params.id)

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <img src={user.avatar} alt={`avatar-${user.id}`} />
        <div>
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}
