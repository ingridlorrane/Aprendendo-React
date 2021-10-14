import { Header } from "./Componente/Header";

/*importar react router https://reactrouter.com/web/guides/quick-start */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "C:/Users/Ingrid/my-movies/src/view/Home";
import { About } from "./view/About";
import { MovieDetail } from "./view/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
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

/*Arquitetura Single Page Applications (SPA) - definição das rotas no frontend*/
/*Cada rota terá um comportamento diferente */
