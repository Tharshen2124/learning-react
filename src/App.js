import './App.css';
import { useEffect, useState } from "react";
import Routing from './Routing'
import Form from './CustomHook'
import StateManagement from './StateManagement'
import CustomHook from './CustomHook';

function App() {

  return (
    <div className="App">
      {/* <StateManagement /> */}
      <CustomHook />
    </div>
  );
}

export default App;
