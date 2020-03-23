import React, { useState }  from 'react';
import Axios from 'axios';
import "./Login.css";
import logoSenac from "../../assets/img/senac-img.png";
import  AnaliseAgendamento  from '../analise-agendamento/AnaliseAgendamento';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function Login() {

    let [socialName, setSocialName] = useState('');
    const [password, setpassword] = useState('');
    let i = 0;
    // const setEmail = (email) => {
    //     this.email = email;
    // };


    function returnAnalise(i) {
        return <AnaliseAgendamento r={i}/>
    }

    const teste = (x) => {
        i++;
        return (
            1
        );
    }

    const userLogin = async () => {
        const token = await Axios.get('http://localhost:9001/api/PessoaFisica/Token');

        const pessoas = await Axios.get('http://localhost:9001/api/PessoaFisica', {
             headers: { "Authorization": `Bearer ${token.data}` } 
        })
        .catch(reject => console.log("não foi possível obter as pessoas"));
    };

    return (
        <>
        <div className="Login row" style={{display: "flex" }}>
                <img className="col-sm-2" style={{justifyContent: "center"}} src={logoSenac}/>
        </div>
<form className="offset-md-3  col-md-6 text-center border border-light p-5">

    <p class="h4 mb-4">Sign in</p>

    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>

    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>

    <div className="d-flex justify-content-around">
        <div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
            <a href="">Forgot password?</a>
        </div>
                <button class="btn btn-info btn-block my-4" type="button" onClick={() => userLogin()}>Sign in</button>
                <Link to="analise">Ir para a página Analise</Link>
    <p>Not a member?
        <a href="">Register</a>
    </p>

    <p>or sign in with:</p>

    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-twitter"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-github"></i>
    </a>

</form>

    </>
    );

}