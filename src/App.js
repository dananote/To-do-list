import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Todo from "./pages/Todo";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
