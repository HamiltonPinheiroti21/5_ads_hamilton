import React, { Component } from 'react'
import './Login.css'
import Axios from 'axios'
import Logo from '../../Assets/img/logo.png'

export default class Login extends Component {

    constructor(props) {

        super(props)

        this.state = {
            usuario: '',
            senha: '',
            status: ''
        }
    }

    changerHandler = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    submitHandler = (e) => {
        Axios.post('http://localhost:3003/api/login', this.state)
            .then(resp => {
                console.log(resp)
                const { data } = resp
                if (data) {
                    let dados = JSON.stringify(data[0])
                    //console.log(dados)
                    if (data[0] !== undefined || data[0].status === 'erro') {
                        localStorage.setItem('app-token', dados)
                        window.location.href = '/'
                    }
                } else {
                    this.setState({ usuario: '', senha: '' })
                    window.location.href = '/login'
                }
            })
    }

    render() {

        const { usuario, senha, status } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 my-1 mx-auto text-center">
                        <img src={Logo} alt="" />
                        {status}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 mx-auto">
                        <form onSubmit={this.submitHandler}>

                            <div className="form-group">
                                <label htmlFor="usuario">Usuário</label>
                                <input type="text" className="form-control login-input" id="usuario" name="usuario" placeholder="Seu usuario" value={usuario} onChange={this.changerHandler} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="senha">Senha</label>
                                <input type="password" className="form-control login-input" id="senha" name="senha" value={senha} onChange={this.changerHandler} placeholder="Senha" />
                            </div>

                            <button type="submit" className="login-btn">Logar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}