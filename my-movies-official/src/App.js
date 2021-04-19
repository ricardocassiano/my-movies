import { Header } from "./components/Header";
import { Home } from "./views/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDetail";

function App() {

  return (
    <div className="App">
      <Router>

        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            Resumindo, criação das rotas da aplicação*/}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {//Os dois pontos ':' indicam a passagem de paramatro na URL - definição do react-router-dom
          }
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        
      </Router>
    </div>

    
  );
}

export default App;
