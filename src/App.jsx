import { useState } from "react";
import Header from "./components/Header.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/StateLogin.jsx";

function App() {
  const [login, setLogin] = useState(false);
  const [singup, setSingup] = useState(false);
  return (
    <>
      <Header />
      <main>
        {!login && <Login onLogin={setLogin} />}
        {login && !singup && <Signup onSingup={setSingup} />}
        {singup && <h2>Hello to join us!!!</h2>}
      </main>
    </>
  );
}

export default App;
