import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./Login.css";
import PessoaFisica from '../../shared/_base/models/pessoa-fisica.model';
import loginService from '../../shared/services/login-service';

export default class Login extends Component {
    email: any;
    password: any;

    constructor(props: any) {
        super(props);
    }
    
    validarForm() {
    }
    
    person: PessoaFisica[] = [];
    
    userLogin = async () => {

		const user = {
			email: this.email,
			password: this.password
		};
        
        this.validarForm();
		loginService.login(user).then(person => this.redirectToAnalise(person));
    };
    
    redirectToAnalise = (person: { id:number }) => {
        if (person != null && person.id > 0)
        document.location.href = "/analise-agendamento";
    }
    
    setEmail = (event: any) => this.email = event.target.value;
    setPassword = (event: any) => this.password = event.target.value;
    
    render() {
			return (
				<div id="opaco">
					<div id="div-inicial-login">
						<form noValidate={true} className="needs-validation form offset-md-3 col-md-6 p-5 text-center border border-light">
							<h1 className="title mb-4">SGA</h1>
							<div className="form-row">
								<label id="label-email" className="d-flex" htmlFor="defaultLoginFormEmail">Email</label>
								<input type="email" autoFocus id="defaultLoginFormEmail" name="email" onChange={this.setEmail.bind(this)} className="form-control mb-4" placeholder="E-mail" required={true}/>
							</div>
							<label id="label-password" className="d-flex" htmlFor="defaultLoginFormPassword">Senha</label>
							<input type="password" id="defaultLoginFormPassword" name="password" className="form-control mb-4" placeholder="Senha"/>
							<div className="d-flex justify-content-between">
								<div className="flex">
									<label className="custom-control-label" htmlFor="defaultLoginFormRemember">Lembre-se</label>
									<input type="checkbox" className="custom-control-checkbox" id="defaultLoginFormRemember"/>
								</div>
								<Link to="analise-agendamento">Esqueceu a senha?</Link> 
							</div>
							<button className="btn btn-info btn-block my-4" id="btn-logar" type="button" onClick={this.userLogin.bind(this)}>Sign in</button>
							<p>Não tem uma conta?
								<Link to="analise-agendamento">Cadastre-se</Link> 
							</p>

							<p>Se preferir, entre com</p>

							<a type="button" className="light-blue-text mx-2">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</a>
							<a type="button" className="light-blue-text mx-2">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</a>
							<a type="button" className="light-blue-text mx-2">
								<i className="fa fa-github"></i>
							</a>
						</form>
					</div>
				</div>
			);
    }

}