import React, { useState, Component }  from 'react';
import "./Login.css";
import { PessoaFisicaService } from '../../shared/services/pessoa-fisica-service';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    // constructor(props: Readonly<{}>) {
    //     super(props);
    //     let [socialName, setSocialName] = useState('');
    //     const [password, setpassword] = useState('');
    //     let i = 0;
    // }


    userLogin = async () => {
        const person = new PessoaFisicaService().getAll();
        // let person = await s.getEntity();
    };

    render() {
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
                    <button className="btn btn-info btn-block my-4" type="button" onClick={async () => await this.userLogin()}>Sign in</button>
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

}