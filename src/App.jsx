import React from "react";
import GitList from "./pages/gitList";
import { GitProvider } from "./context/gitContext";
import './App.css';

function App() {
  

  return (
  <>
   <GitProvider>

       <GitList/>

    </GitProvider>
  </>
  );
}

export default App;
