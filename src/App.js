import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Chat from './Chat.js';
import Login from './Login.js';
import { useStatevalue } from './StateProvider';


function App() {
 // const[user,setUser]=useState(null);
  const [{user},dispatch]=useStatevalue();
  return (
    <div className="app">
       {/*header */}
       <Router>
       {!user?<Login />:
       (
        <>
        <Header />
       <div className="app__body">
      {/*sidebar*/}
        <Sidebar />
       {/*react-router-->chat screen*/}
          <Switch>
          <Route path="/room/:roomId">
        <Chat />
       </Route>
       <Route path="/" >
         <h1>welcome</h1>
       </Route>
       </Switch>
       </div>
        </>
       )
       }
         
       </Router>
    </div>
  );
}

export default App;
