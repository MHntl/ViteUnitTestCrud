import { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";
import { users as userArr } from "./constants/constants";

const App = () => {
  const [users, setUsers] = useState(userArr);
  const addUser = (user) => {
    setUsers(users.concat(user));
  };
  return (
    <div className="container my-3">
      <h2 className="text-center">Unit Test</h2>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default App;
