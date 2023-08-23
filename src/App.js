import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import GlobalStyle from "./GlobalStyle";
import Layout from "./Layout";
import { useMediaQuery } from "react-responsive";
import { useRecoilState } from "recoil";
import checkMobile from "./atom/checkMobile";
import { useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useRecoilState(checkMobile)
  const Mobile = useMediaQuery({
    query: "(max-width:800px)"
  });

  useEffect(() => {
    setIsMobile(Mobile)
  }, [Mobile])

  return (
    <>
      <GlobalStyle />
      <Layout isMobile={Mobile}>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
