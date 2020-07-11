import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import Login from './features/login/Login';
import AnaliseAgendamentoList from './features/analise-agendamento/AnaliseAgendamentoList';
import ListagemHeader from './containers/ListagemHeader';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={Login}/>

        <Route 
            path="/analise-agendamento" 
            render= {
                ({ match: { url } }) => (
                    <>
                        <Route path={`${url}/`} component={AnaliseAgendamentoList} exact />
                        <Route path={`${url}/cadastro/(:id)`} component={ListagemHeader} />
                    </>
                )
            }
        />

        <Route
            path="/sign-up"
            render= {
                ({ match: { url } }) => (
                    <>
                        <Route path={`${url}/`} component={AnaliseAgendamentoList} exact />
                        <Route path={`${url}/cadastro/(:id)`} component />
                    </>
                )
            }
        />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();