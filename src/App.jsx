import { useState } from "react";

import MoreButton from "./MoreButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoreButton/>
    </>
  );
}

export default App;
