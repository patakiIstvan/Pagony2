import Collapse from "./Collapse";
import Form from "./Form";

export default ({ user, removeUser, updateUser }) => {
  if (Object.keys(user).length > 0) {
    return (
      <div>
        <ul>
          <li>
            <strong>{user.name}</strong>
          </li>
          <li>{user.email}</li>
          <li>{user.phoneNumber}</li>
        </ul>
      </div>
    );
  }
};
