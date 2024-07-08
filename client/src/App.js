// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import TaskList from './components/TaskList';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/tasks" component={TaskList} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;
