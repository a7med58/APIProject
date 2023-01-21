import React, { useEffect, useState } from "react";
import { APIContainer, APIWarper, H4, OL } from "./Style";

export default function APIUser() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  });

  return (
    <div>
      <APIWarper>
        <div className="container">
          <APIContainer>
            {users.map((user) => (
              <OL key={user.id}>
                <H4>User Name:{user.username}</H4>
                <H4>Name:{user.name}</H4>
                <H4>Email:{user.email}</H4>
                <H4>Phone:{user.phone}</H4>
              </OL>
            ))}
          </APIContainer>
        </div>
      </APIWarper>
    </div>
  );
}
