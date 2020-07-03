import React from 'react'
import { Component } from 'react';
import './Home.css'
import Header from '../header'
import Logo from '../../Assets/img/logo.png'

export default class Home extends Component {

    render() {
       
        return (
            <div className="home">
                <Header />
                <img src={Logo} alt=""/>
                <h1>Projeto Apresentação</h1>
                <h2>Trabalho em React</h2>
            </div>
        )
    }
}