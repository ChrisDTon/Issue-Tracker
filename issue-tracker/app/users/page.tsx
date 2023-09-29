import React from 'react'

interface User {/* To give const users an expected type so that the later arrow function for user works */
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}
    ) // Fetches users from placeholder site, doesn't save in cache cuz assuming it will often be changed
  const users:User[] = await res.json();  // Turns it into a json file and makes commands

  return (
    <>
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <table className='table table-bordered'>{/* Table of all users fetched from placeholder site */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td></tr>)}{/* Makes rows of all the users using their id as primary key */}
          </tbody>
        </table>
    </>
  )
}

export default UsersPage