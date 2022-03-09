import Users from "./components/Users";
import "./styles.scss";
import State from "./State";
import FeladatLeiras from "./components/FeladatLeiras";

export default function App() {
  return (
    <div className="App">
      {/* <FeladatLeiras /> */}
      <State>
        <Users
          users={State.users}
          addUser={State.addUser}
          removeUser={State.removeUser}
          updateUser={State.updateUser}
        />
      </State>
    </div>
  );
}
