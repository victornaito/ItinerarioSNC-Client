import React, { useState, Component }  from 'react';
import "./Login.css";
import pessoaFisicaService, { PessoaFisicaService } from '../../shared/services/pessoa-fisica-service';
import { Link } from 'react-router-dom';
import PessoaFisica from '../../shared/_base/models/pessoa-fisica.model';
export default class Login extends Component {
    
    validarForm() {
        
    }
    
    person!: PessoaFisica[];
    
    userLogin = async () => {
        
        // this.validarForm(this);
        this.person = await pessoaFisicaService.getAll();
    };
    
    render() {
        // const [socialName, setSocialName] = useState('');
        return (
    <>
                <div className="Login row" style={{ display: "flex", alignContent: "center" }}>
                <img className="col-sm-2" style={{justifyContent: "center"}}/>
        </div>
        <form className="offset-md-3 col-md-6 text-center border border-light p-5">
            <p className="h4 mb-4">Bem Vindo</p>
            <label id="label-email" className="d-flex" htmlFor="defaultLoginFormEmail">Email</label>
            <input type="email" autoFocus id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>
            <label id="label-password" className="d-flex" htmlFor="defaultLoginFormPassword">Senha</label>
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Senha"/>

            <div className="d-flex justify-content-around">
                <div>
                    <div className="custom-control custom-checkbox">
                        <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Lembre-se</label>
                        <input type="checkbox" className="custom-control-checkbox" id="defaultLoginFormRemember"/>
                    </div>
                </div>
                    <a href="">Esqueceu a senha?</a>
                </div>
                        <button className="btn btn-info btn-block my-4" id="btn-logar" type="button" onClick={this.userLogin.bind(this)}>Sign in</button>
                        <Link to="analise">Ir para a página Analise</Link>
            <p>Não é um membro?
                <a href="#">Registre-se</a>
            </p>
        
            <p>ou sign in com:</p>
        
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
    </>
        );
    }

}