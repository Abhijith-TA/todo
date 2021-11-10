//import './App.css';
import './newProject.css'
import React from 'react';
//import Todo from './todo/components/todo'
import HomePage from './NewProject/components/homePage';
import SignIn from './NewProject/components/signIn';
import NavBar from './NewProject/components/navBarHome';
import Footer from './NewProject/components/footer';
import AdminPage from './NewProject/components/adminPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = ()=> {
  
  
  return (
    <>
    {/* <Todo /> */}
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/sign-in'>
          <SignIn/>
        </Route>
        <Route path='/admin'>
          <AdminPage/>
        </Route>
      </Switch>
    </Router>
    <Footer />
     </>
  );
}

export default App;
