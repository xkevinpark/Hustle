import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar.js"
import ExerciseList from "./components/ExerciseList.js";
import EditExercise from "./components/EditExercise.js";
import CreateExercise from "./components/CreateExercise.js";
import CreateUser from "./components/CreateUser.js";

function App() {
  return (
    <Router>
      <div className="container"> 
      <NavBar />
      <br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
};

export default App;