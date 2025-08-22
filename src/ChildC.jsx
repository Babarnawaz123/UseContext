import React, { useContext } from "react";
import { UserContext } from "./App";
const ChildC = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h4>User Context To avoid Prop Drilling</h4>
      Data: <b>{user.name}</b>
      <p>
        so in this task we use the Usecontext to avoid the prop drilling. And
        Pass the data From parent <b>APP</b>
        <br /> which is provider and consume by the <b>Child C</b>
        which was the consumer of the data
      </p>
    </div>
  );
};

export default ChildC;
