import React from "react";
import { createRoot} from "react-dom/client";
import Counter from "./Counter";

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
