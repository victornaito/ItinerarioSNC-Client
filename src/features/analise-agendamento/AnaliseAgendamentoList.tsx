import React, { Component }  from 'react';

import  ListagemHeader from '../../containers/ListagemHeader';
import "./AnaliseAgendamentoList.css";

export default class AnaliseAgendamentoList extends Component {

    constructor(props: any) {
        super(props);
    }

    getSchedules = () => [
        {
            id: 0,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        },
        {
            id: 1,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        },
        {
            id: 2,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        },
        {
            id: 3,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        },
        {
            id: 4,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        },
        {
            id: 5,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        },
        {
            id: 6,
            responsavel: "Victor Naito",
            descricao: "O carro está sendo analisado",
            horarioPrevisto: new Date(),
        }
    ];


    render() {
        const schedulesList = this.getSchedules().map((element: any) => 
            <div key={element.id} className="list-item d-flex col-md-10 ml-8 card card-body">
                <div>
                    <span className="badge badge-pill">
                        Status: { element.descricao }
                    </span>
                    <span className="badge badge-pill">
                        Data e Hora do Pedido: { element.horarioPrevisto.toLocaleDateString().split(' ')[0]} - {element.horarioPrevisto.toLocaleTimeString().split(' ')[0] }
                    </span>
                </div>
            </div>
        );

        return (
            <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy" />
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                </a>
            </nav>
            <div className="row mt-5 container-fluid">
                <div className="col-md-10 mt-5">
                {
                    schedulesList
                }
                </div>
                <ListagemHeader />
            </div>
            </>
        );
    }
}