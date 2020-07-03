import React from 'react'
import { Component } from 'react'
import './Header.css'

export default class Header extends Component {

    render() {
        let base = ''
        if (!!localStorage.getItem('app-token')) {
            let dados = localStorage.getItem('app-token')
            base = JSON.parse(dados)
        } else {
            base = ''
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-menu">
                    <a className="navbar-brand" href="/">{base.usuario}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(página atual)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/entrada">Entrada</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/saida">Saída</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sair">Sair</a>
                            </li>
                            
                            
                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}