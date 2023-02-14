import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Posts from "./features/posts/Posts";
import AppForm from "./features/posts/AddPostForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <Posts />
      <AppForm />
    </main>
  );
}

export default App;
