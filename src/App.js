import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";


/* Components */
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import Talleres from "./pages/Talleres";
import Constelaciones from "./pages/Constelaciones";
import Contacto from "./pages/Contacto";
import Ejercicios from "./pages/Ejercicios";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/talleres" component={Talleres} />
          <Route exact path="/constelaciones" component={Constelaciones} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/ejercicios" component={Ejercicios} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
