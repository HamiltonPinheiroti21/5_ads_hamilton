export const Logado = () => {
    if(!!localStorage.getItem('app-token')){
        let dados = localStorage.getItem('app-token')
        let local = JSON.stringify(dados)
        return !!local
    }else{
        localStorage.clear('app-token')
        window.location.href = '/login'
    }

}