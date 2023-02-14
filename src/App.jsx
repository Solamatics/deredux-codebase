import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Posts from "./features/posts/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <Posts />
    </main>
  );
}

export default App;
