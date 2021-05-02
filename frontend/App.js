import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import CreateUser from "./components/CreateUser.js";
import CreateExercise from "./components/CreateExercise.js";
import ExerciseList from "./components/ExerciseList.js";
import EditExercise from "./components/EditExercise.js";
import NavBar from "./components/NavBar.js"

function App() {
  return (
    <Router>
      <div className="container"> 
      <NavBar />
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/edit/:id" component={EditExercise} />
      </div>
    </Router>
  );
};

export default App;