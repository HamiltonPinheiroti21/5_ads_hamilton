import React, { Component } from 'react'
import './Saida.css'
import Header from '../header'
import Axios from 'axios'

export default class Saida extends Component {


    constructor(props) {
        super(props)

        this.state = {
            etiqueta: '',
            usuario: '',
            itens: []

        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        let base = ''
        if (!!localStorage.getItem('app-token')) {
            let dados = localStorage.getItem('app-token')
            base = JSON.parse(dados)
            this.setState({ usuario: base.usuario })
        } else {
            base = ''
        }
    }

    submitHandler = (e) => {
        console.log(this.state)
        Axios.post('http://localhost:3003/api/cadastro/saida', this.state)
            .then(resp => {
               // console.log(resp)
                if (resp.data.status === 'cadastrado') {
                    this.setState({
                        status:
                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Sucesso!</strong> o seu cadastro foi realizado com sucesso!
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                    })
                }

            })
            .catch(erro => {
                console.log(erro)
            })
    }

    componentDidMount() {

        const url = `http://localhost:3003/api/listar/saida`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    itens: json,
                })
            });
    }


    render() {

        const { etiqueta, itens } = this.state


        return (
            <div className="saida">
                <Header />
                <h1 className="titulo">Saída</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mx-auto text-left">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="etiqueta" className="titulo">Utilizar leitor RFID</label>
                                    <input type="text" className="form-control bg-input" name="etiqueta" value={etiqueta} onChange={this.changeHandler} placeholder="leitor RFID" />
                                    {/* <input type="hidden" className="form-control bg-input" name="usuario" value={base.usuario} onChange={this.changeHandler} placeholder="leitor RFID" /> */}
                                </div>
                                <button type="submit" className="bg-btn">Enviar</button>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-12">

                            <table className="table table-striped table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Etiqueta</th>
                                        <th>Usuário</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itens.map(item => (
                                        <tr key={item.pk_id}>
                                            <td> {item.pk_id} </td>
                                            <td>{item.etiqueta} </td>
                                            <td>{item.usuario}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}