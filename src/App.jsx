import "./App.css";
import ChildA from "./ChildA";
import { createContext, useState } from "react";
//step1: Create Context
const UserContext = createContext();

// step2:Wrap all the child inside a provider
//step3: pass value
//step4: consume context in component which want to consume.

function App() {
  const [user, setUser] = useState({ name: "Babar Nawaz" });
  return (
    <>
      <div>
        {/*UserContext wrapper to rapper the data Consumers */}
        <UserContext.Provider value={user}>
          <ChildA />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
export { UserContext };
