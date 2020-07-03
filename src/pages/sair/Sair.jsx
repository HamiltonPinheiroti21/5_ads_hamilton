const Sair = props => {
    localStorage.clear('app-token')
    window.location.href = '/login'
}

export default Sair