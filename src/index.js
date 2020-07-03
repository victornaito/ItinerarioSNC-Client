import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Login from './features/login/Login';
import AnaliseAgendamento from "../src/features/analise-agendamento/AnaliseAgendamento";



ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/" exact="true" component={Login} />
        <Route path="/analise" component={AnaliseAgendamento} />
    </Switch>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();