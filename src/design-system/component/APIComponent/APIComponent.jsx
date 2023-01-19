import {useEffect, useState } from 'react';

export default function APIComponent() {
    const [user , setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result=> {
            setUser(result);
        });
    })
  return (
        <div>
            {user.map(user => 
              <h3>{user.name}</h3>,
              <p>{user.email}</p>          
            )}
    </div>
  )
}
