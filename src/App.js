import Widgets from "./Widgets";
import React from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Feed from './Feed';
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}




    </div>
  );
}

export default App;
