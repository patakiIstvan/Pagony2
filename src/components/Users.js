import { useEffect } from "react";
import Form from "./Form";
import User from "./User";

export default ({ users, addUser, removeUser, updateUser }) => {
  useEffect(() => {
    console.log("OMG something happened");
    console.log(users);
  }, [users]);

  const addOrChangeUser = (e) => {
    e.preventDefault();
    const userObject = {
      name: e.target.name.value,
      email: e.target.mail.value,
      phoneNumber: e.target.phone.value
    };
    console.log(userObject);
    addUser(userObject);
  };

  return (
    <div>
      {users.map((user, i) => (
        <User
          key={user.id}
          user={user}
          removeUser={removeUser}
          updateUser={updateUser}
        />
      ))}
      <Form onSubmit={addOrChangeUser} />
      teszt
    </div>
  );
};
