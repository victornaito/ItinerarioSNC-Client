import React, { useState }  from 'react';
import "./Login.css";
import  AnaliseAgendamento  from '../analise-agendamento/AnaliseAgendamento';
import ServiceBase from '../_base/service-base';
import PessoaFisica from '../_base/models/pessoa-fisica.model';
import { Link } from 'react-router-dom';

export default function Login() {

    let [socialName, setSocialName] = useState('');
    const [password, setpassword] = useState('');
    let i = 0;


    const userLogin = async () => {
        const s = new ServiceBase<PessoaFisica>("pessoafisica");
        let person = await s.getEntity();
    };

    return (
        <>
        <div className="Login row" style={{display: "flex" }}>
                <img className="col-sm-2" style={{justifyContent: "center"}}/>
        </div>
<form className="offset-md-3  col-md-6 text-center border border-light p-5">

    <p className="h4 mb-4">Sign in</p>

    <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>

    <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>

    <div className="d-flex justify-content-around">
        <div>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
            <a href="">Forgot password?</a>
        </div>
                <button className="btn btn-info btn-block my-4" type="button" onClick={async () => await userLogin()}>Sign in</button>
                <Link to="analise">Ir para a página Analise</Link>
    <p>Not a member?
        <a href="">Register</a>
    </p>

    <p>or sign in with:</p>

    <a type="button" className="light-blue-text mx-2">
        <i className="fab fa-facebook-f"></i>
    </a>
    <a type="button" className="light-blue-text mx-2">
        <i className="fab fa-twitter"></i>
    </a>
    <a type="button" className="light-blue-text mx-2">
        <i className="fab fa-linkedin-in"></i>
    </a>
    <a type="button" className="light-blue-text mx-2">
        <i className="fab fa-github"></i>
    </a>

</form>

    </>
    );

}