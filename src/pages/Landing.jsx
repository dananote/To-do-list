import React, { useEffect } from "react";
import todoAPI from "../api/todoAPI";

const Landing = () => {
  const { getTodo } = todoAPI();

  useEffect(() => {
    (async () => {
      const data = await getTodo();
      console.log(data);
    })();
  }, []);

  return <div>Landing</div>;
};

export default Landing;
